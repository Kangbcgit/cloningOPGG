import { styled } from "styled-components";
import { useSelector } from "react-redux";


export const Wrapper = styled.div`
  position: relative;
  max-width: ${props => props.currentInnerWidth}px;
  border: 1px solid rgb(120, 0, 255);
`;

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
