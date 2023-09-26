import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const ImportLink = styled(Link)``;
export const SlideNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  width: fit-content;
  height: 46px;

  color: var(--mainColor_font);
  background: var(--mainColor_bg);
  &>${ImportLink} {
    display: flex;
    align-items: center;
    height: 100%;
    white-space: nowrap;
  }
`; 