import { styled } from "styled-components";
import { useSelector } from "react-redux";

/** 해당 컴포넌트 내부의 가장 큰 부모를 감싸는 styled-components */ 
export const Wrapper = styled.div`
  position: relative;
  width: ${props => props.currentInnerWidth}px;
  /* border: 1px solid rgb(120, 0, 255); */
  /* overflow: hidden; */
`;

/** img 태그를 감싸고 직계자손 img의 크기를 조정해주는 styled-components */
export const WrapImg = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  /* overflow: hidden; */
  &>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
`;
/** Mobile 환경에서 클릭시 나오는 모달창을 구성하는 styled-components */
export const WrapMobileModal = styled.div`
  position: fixed;
  z-index: 9999;
`;
