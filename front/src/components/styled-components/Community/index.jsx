import styled from "styled-components";


export const Commnunity = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1;

  color: white;
  background: var(--communityItem_bg);
`;

export const CommunityItem = styled.div`
  display: flex;

  height: 114px;
  width: 90%;

  border-bottom: 1px solid var(--community_bg);
`;