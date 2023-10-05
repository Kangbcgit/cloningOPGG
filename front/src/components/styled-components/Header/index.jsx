import React, { useEffect, useRef, useState } from 'react'
import { ImportLink, SlideNav } from '../Nav';
import { WrapImg, WrapMobileModal, Wrapper } from '../Wrapper';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { debounce as _debounce } from 'lodash'
import axios from 'axios';
import actionApi from '../../../redux/action/api';
 

const ImportRegionModal = styled(WrapMobileModal)``;
const ImportTopViewWrapper = styled(Wrapper)`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 10px;

  width: 100%;
  padding-bottom: 20px;
  background: var(--topView_bg);
  @media (min-width:431px) {
    background-color: red;
  }
  /* &::after {
    position: absolute;
    left: 50%;
    top: 39.25%;
    transform: translate(-50%, -50%);

    content: '';
    background: url('/images/WrapperBackground/WrapperBackgroundwebp.webp');
    object-fit: cover;
    width: 67.44186046511628vw;
    height: 40.465vw;
    background-size: cover;
  } */
  &>header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* width: calc(100% - 32px); */
    width: 100%;
    height: 53px;
    padding: 0 16px;
  }
  &>form {
    position: relative;
    display: flex;
    height: 40px;
    /* border-radius: 10px; */
    &>.regionButton {
      position: relative;
      width: 74px;
      height: 100%;
      border-radius: 10px 0 0 10px;
      background: var(--region_bg);
      overflow: hidden;
      &>button {
        width: 100%;
        height: 100%;
      }

      &>${ImportRegionModal} {
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;

        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);

        opacity: 0;
        pointer-events: none;
        overflow: hidden;
        transition: opacity .1s;
        &.on {
          opacity: 1;
          pointer-events: auto;
        }
        &>.regionList {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);

          display: flex;
          flex-direction: column;
          &>button {
            width: 74px;
            height: 40px;
          }
        }
      }
    }
    
    &>input {
      position: relative;
      width: 264px;
      height: 100%;
      padding: 0 10px;
    } 
    &>.wordCompletion {
      position: absolute;
      left: 74px;
      top: 100%;
      width: 264px;
      height: 40px;

      background: red;
    }
    &>button {
      position: relative;
      width: 60px;
      height: 100%;
      border-radius: 0 10px 10px 0;
      &>img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        height: 60%;
        object-fit: contain;
      }
    }
  }
`;
const ImportWrapSilbilingSiteLogo = styled(WrapImg)`
  width: 24px;
  height: 24px;
`;
const ImportWrapOpggLogo = styled(WrapImg)`
  width: 65px;
  height: 16px;
`;
const ImportWrapLoginIcon = styled(WrapImg)`
  width: 24px;
  height: 24px;
`;
const ImportWrapBgImg = styled(WrapImg)`
  width: 290px;
  height: 174px;

  margin: 30px 0;
`;
const WordCompletion = styled.nav`
  position: absolute;
  left: 74px;
  top: 40px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 264px;
  padding: 10px 10px 0 10px;

  background: var(--communityItem_bg);

  opacity: 0;
  pointer-events: none;
  transition: opacity .1s;

  &.on {
    opacity: 1;
    pointer-events: auto;
  }
  &>.summonerNameCompletion {
    display: flex;
    color: white;
    &>${WrapImg} {
      overflow: hidden;
      border-radius: 50%;
      margin-right: 5px;
    }
    &>span {
      &>h3 {
        font-weight: normal;
        font-size: 15px;
      }
      &>span {
        font-size: 13px;
      }
    }
  }
  
`;
const ImportMainMobileNav = styled(SlideNav)`
`;

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isHeaderImgLoad = useSelector(state => state.currentInnerWidthReducer.currentDisplay.headerImgToggle);
  const opggSummonerWordCompletion = useSelector(state => state.summonerInfoDataReducer.opggSummonerWordCompletion);
  const opggLoadError = useSelector(state => state.summonerInfoDataReducer.error);
  const currentInnerWidth = useSelector(state => state.currentInnerWidthReducer.currentInnerWidth);

  const regionModal = useRef();

  const [closeSummonersList, setCloseSummonersList] = useState(true);
  const wordCompletionTag = useRef();
  const inputText = useRef();

  const modalOn = (e, target) => {
    target.classList.add('on');
  }
  const modalOff = (e, target) => {
    target.classList.remove('on');
  }
  const searchSummonersInfo = e => {
      if (inputText) {
        let targetSummonerName;
        try {
          targetSummonerName = e.currentTarget.children[1].children[0].textContent;
        } catch (error) {
            targetSummonerName = inputText.current?.value;
        }
        
        if(targetSummonerName) {
          navigate(`/summonerInfo/${targetSummonerName}`);
        }
      }
  }
  const debouncedOPGG = _debounce(wordCompletionAction, 200);
  async function  wordCompletionAction (e)  {
    let name = e?.target.value;
    if (name === '' || name === undefined || opggLoadError) {
      setCloseSummonersList(true);
      return;
    }
    await dispatch(actionApi.opggSummonerWordCompletion(name));
    setCloseSummonersList(false);
  }
  // useEffect(() => {
  //   window.addEventListener('click', e => {
  //     if (wordCompletionTag?.current === null) return;
  //     if (!wordCompletionTag.current.contains(e.target)) {
  //       setCloseSummonersList(true);
  //     } else {
  //       setCloseSummonersList(false);
  //     }
  //   })
  // }, []);
  useEffect(() => {
    console.log('주인님! 눌렸어요!')
  }, [closeSummonersList]);
  return (
    <>
      <ImportTopViewWrapper currentInnerWidth={currentInnerWidth}>
        <header>
          <ImportWrapSilbilingSiteLogo>
            <img src={`${process.env.PUBLIC_URL}/images/header/leagueOfLegends_Logo.svg`} alt="" />
          </ImportWrapSilbilingSiteLogo>
          <ImportWrapOpggLogo as={Link} to={'/'}>
            <img src={`${process.env.PUBLIC_URL}/images/header/opgg_Logo.svg`} alt="" />
          </ImportWrapOpggLogo>
          <ImportWrapLoginIcon to='/'>
            <img src={`${process.env.PUBLIC_URL}/images/header/icon-login.svg`} alt="" />
          </ImportWrapLoginIcon>
        </header>
        {isHeaderImgLoad ? 
        (<ImportWrapBgImg>
          <img src={`${process.env.PUBLIC_URL}/images/WrapperBackground/WrapperBackgroundwebp.webp`} alt="" />
        </ImportWrapBgImg>) : null}
        <form action="" onSubmit={searchSummonersInfo}>
          <div className='regionButton'>
            <button type='button' onClick={e => modalOn(e, regionModal.current)}>선택해라</button>
            <ImportRegionModal ref={regionModal} onClick={e => modalOff(e, regionModal.current)}>
              <div className='regionList'>
                <button>여긴 중국</button>
                <button>여긴 한국</button>
                <button>여긴 미쿸</button>
              </div>
            </ImportRegionModal>
          </div>
          <label htmlFor="search"></label>
          <input ref={inputText} id="search" type="text" placeholder='소환사님의 이름을 입력해주세요.' autoComplete="off" onChange={debouncedOPGG} onClick={() => {
            setCloseSummonersList(false);
            wordCompletionAction();
          }} />
          <WordCompletion ref={wordCompletionTag} className={`${closeSummonersList ? null : 'on'}`}>
            {opggSummonerWordCompletion?.map((item, index) => {
              {/* console.log(item); */}
              return (
                <div className='summonerNameCompletion' onClick={searchSummonersInfo}>
                  <WrapImg width={'36px'} height={'36px'}>
                    <img src={`${item.profile_image_url}`} alt="" />
                  </WrapImg>
                  <span>
                    <h3>{item.name}</h3>
                    {item.solo_tier_info ? (<span>{`${item.solo_tier_info.tier} ${item.solo_tier_info.division} - ${item.solo_tier_info.lp}LP`}</span>) : `level : ${item.level}`}
                  </span>
              </div>);
            })}
            <button type='button' onClick={() => {
              setCloseSummonersList(true);
              }} style={{background: 'var(--community_bg)', color: 'white'}} >닫기</button>
          </WordCompletion>
          <button type='submit'>
            <img src={`${process.env.PUBLIC_URL}/images/form/icon-gg.svg`} alt="" />
          </button>
        </form>
        <ImportMainMobileNav>
          <ImportLink to='/'>챔피언 분석</ImportLink>
          <ImportLink to='/'>게임 모드</ImportLink>
          <ImportLink to='/'>커뮤니티</ImportLink>
          <ImportLink to='/'>통계</ImportLink>
          <ImportLink to='/'>랭킹</ImportLink>
          <ImportLink to='/'>프로 관전</ImportLink>
          <ImportLink to='/'>강의</ImportLink>
        </ImportMainMobileNav>
      </ImportTopViewWrapper>
    </>
  )
}

export default Header
