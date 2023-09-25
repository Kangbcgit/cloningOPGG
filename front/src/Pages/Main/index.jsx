import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { WrapImg, Wrapper } from '../../components/Wrapper';
const ImportWrapper = styled(Wrapper)`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 10px;

  height: 369px;
  background: #28344E;
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
    position: fixed;
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
      &>button {
        width: 100%;
        height: 100%;
      }

      &>.regionList {
        position: absolute;
        left: 0;
        top: 100%;

        display: flex;
        flex-direction: column;
        &>button {
          width: 74px;
          height: 40px;
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

  margin-top: 60px;
`;

function Main() {
  const currentInnerWidth = useSelector(state => state.currentInnerWidth.currentInnerWidth);
  return (
    <ImportWrapper currentInnerWidth={currentInnerWidth}>
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
          <button>선택해라</button>
          <div className='regionList'>
            <button>여긴 중국</button>
            <button>여긴 한국</button>
            <button>여긴 미쿸</button>
          </div>
        </div>
        <label htmlFor="search"></label>
        <input id = "search" type="text" placeholder='소환사님의 이름을 입력해주세요.'/>
        <button>
          <img src={`${process.env.PUBLIC_URL}/images/form/icon-gg.svg`} alt="" />
        </button>
      </form>
    </ImportWrapper>
  )
}

export default Main