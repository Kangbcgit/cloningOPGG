import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { WrapImg, Wrapper } from '../../components/Wrapper';
const ImportWrapper = styled(Wrapper)`
  display: flex;
  flex-flow: column;
  align-items: center;
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
    width: calc(100% - 32px);
    height: 53px;
    padding: 0 16px;
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
        <input type="text" />
      </form>
    </ImportWrapper>
  )
}

export default Main