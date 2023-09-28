import React from 'react'
import { CommunityItem } from '../styled-components/Community'
import styled from 'styled-components'

const ImportCommunityItem = styled(CommunityItem)`
  &>.order {
    width: 10%;
  }
  &>.text {
    display: flex;
    flex-direction: column;

    width: 70%;
    &>h5 {
      margin-bottom: 15px;
      font-size: var(--mobile-community_title);
    }
    &>span {
      font-size: var(--mobile-community_desc);
    }
  }
  &>.thumnail {
    width: 20%;
    &>div {
      width: 100%;
      height: 100%;
    }
  }
`;

function CoummunityPost(props) {
  return (
    <ImportCommunityItem>
      <div className="order">
        {props.order}
      </div>
      <div className="text">
        <h5>{props.title}</h5>
        <span className='postTime'>{props.postTime}</span>
        <span className="nickname">{props.nickname}</span>
      </div>
      <div className="thumnail">
        <div style={{border: '1px solid red'}}></div>
      </div>
    </ImportCommunityItem>
  )
}

export default CoummunityPost
