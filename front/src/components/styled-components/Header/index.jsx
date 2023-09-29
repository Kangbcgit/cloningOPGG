import React, { useEffect, useRef } from 'react'
import { SlideNav } from '../Nav';
import { WrapImg, WrapMobileModal, Wrapper } from '../Wrapper';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


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
      width: 264px;
      height: 100%;
      padding: 0 10px;
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
function Header() {
  const navigate = useNavigate();
  const isHeaderImgLoad = useSelector(state => state.isHeaderImgLoad);
  const regionModal = useRef();
  const currentInnerWidth = useSelector(state => state.currentInnerWidthReducer.currentInnerWidth);
  const modalOn = (e, target) => {
    e.preventDefault();
    target.classList.add('on');
  }
  const modalOff = (e, target) => {
    e.preventDefault();
    target.classList.remove('on');
  }
  const searchSummonersInfo = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      navigate(`/summonerInfo/${e.target.value}`);
    }
  }
  
  useEffect(() => {
    console.log(isHeaderImgLoad);
  }, [isHeaderImgLoad]);
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
        <form action="">
          <div className='regionButton'>
            <button onClick={e => modalOn(e, regionModal.current)}>선택해라</button>
            <ImportRegionModal ref={regionModal} onClick={e => modalOff(e, regionModal.current)}>
              <div className='regionList'>
                <button>여긴 중국</button>
                <button>여긴 한국</button>
                <button>여긴 미쿸</button>
              </div>
            </ImportRegionModal>
          </div>
          <label htmlFor="search"></label>
          <input id = "search" type="text" placeholder='소환사님의 이름을 입력해주세요.' onKeyDown={searchSummonersInfo} />
          <button>
            <img src={`${process.env.PUBLIC_URL}/images/form/icon-gg.svg`} alt="" />
          </button>
        </form>
      </ImportTopViewWrapper>
    </>
  )
}

export default Header
