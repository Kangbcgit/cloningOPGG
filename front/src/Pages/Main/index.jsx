import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { WrapImg, WrapMobileModal, Wrapper } from '../../components/Wrapper'
import { ImportLink, SlideNav } from '../../components/Nav'
import { Commnunity, CommunityItem } from '../../components/Community'

const ImportCommunity = styled(Commnunity)`

`;
const ImportMainMobileNav = styled(SlideNav)``;
const ImportRegionModal = styled(WrapMobileModal)``;
const ImportTopViewWrapper = styled(Wrapper)``;
const ImportParentWrapper = styled(Wrapper)`
  &>${ImportTopViewWrapper} {display: flex;
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
      position: absolute;
      left: 0;
      top: 0;
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

  margin-top: 60px;
`;

function Main() {
  const regionModal = useRef();
  let touchStartPoint = 0;
  const touchState = useState({
    startPoint: 0,
    endPoint: 0
  })
  const currentInnerWidth = useSelector(state => state.currentInnerWidth.currentInnerWidth);
  const modalOn = (e, target) => {
    e.preventDefault();
    target.classList.add('on');
  }
  const modalOff = (e, target) => {
    e.preventDefault();
    target.classList.remove('on');
  }
  /* start point - end point = 이동한 거리 => transform으로 입력
    근데 굳이 end point를 사용할 필요가 있을까? 
    move 포인트.. 그걸 활용하면 그냥 그대로 될거같은데.
    마치 api 두번 호출하는 느낌
  */
  const MobileNavTouchStart = e => {

  }
  const MobileNavTouchMove = e => {
    
  }
  const MobileNavTouchEnd = e => {

  }
  useEffect(() => {
    window.addEventListener('touchstart', e => {
    console.log(e.changedTouches[0].pageY);
});});
  return (
    <ImportParentWrapper>
      <ImportTopViewWrapper currentInnerWidth={currentInnerWidth}>
        <header>
          <ImportWrapSilbilingSiteLogo>
            <img src={`${process.env.PUBLIC_URL}/images/header/leagueOfLegends_Logo.svg`} alt="" />
          </ImportWrapSilbilingSiteLogo>
          <ImportWrapOpggLogo>
            <img src={`${process.env.PUBLIC_URL}/images/header/opgg_Logo.svg`} alt="" />
          </ImportWrapOpggLogo>
          <ImportWrapLoginIcon>
            <img src={`${process.env.PUBLIC_URL}/images/header/icon-login.svg`} alt="" />
          </ImportWrapLoginIcon>
        </header>
        <ImportWrapBgImg>
          <img src={`${process.env.PUBLIC_URL}/images/WrapperBackground/WrapperBackgroundwebp.webp`} alt="" />
        </ImportWrapBgImg>
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
          <input id = "search" type="text" placeholder='소환사님의 이름을 입력해주세요.'/>
          <button>
            <img src={`${process.env.PUBLIC_URL}/images/form/icon-gg.svg`} alt="" />
          </button>
        </form>
      </ImportTopViewWrapper>
      <ImportMainMobileNav onTouchStart={MobileNavTouchStart} onTouchMove={MobileNavTouchMove} onTouchEnd={MobileNavTouchEnd}>
        <ImportLink to='/'>챔피언 분석</ImportLink>
        <ImportLink to='/'>게임 모드</ImportLink>
        <ImportLink to='/'>커뮤니티</ImportLink>
        <ImportLink to='/'>통계</ImportLink>
        <ImportLink to='/'>랭킹</ImportLink>
        <ImportLink to='/'>프로 관전</ImportLink>
        <ImportLink to='/'>강의</ImportLink>
      </ImportMainMobileNav>
      <ImportCommunity>
        <h4>Kangbcgit Comment</h4>
        <CommunityItem>
          <div className="order">
          1
          </div>
          <div className="text">
            <h5>제목 입니다.</h5>
            <span>작성시간 입니다.</span>
            <span>닉네임</span>
          </div>
          <div className="thumnail">

          </div>
        </CommunityItem>
        </ImportCommunity>
    </ImportParentWrapper>
  )
}

export default Main