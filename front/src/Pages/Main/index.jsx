import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { WrapImg, WrapMobileModal, Wrapper } from '../../components/styled-components/Wrapper'
import { Commnunity } from '../../components/styled-components/Community'
import CoummunityPost from '../../components/CommunityPost'
import Header from '../../components/styled-components/Header'
import axios from 'axios'

const ImportCommunity = styled(Commnunity)`

`;
const ImportParentWrapper = styled(Wrapper)``;

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let touchStartPoint = 0;
  const [ postsState, setPostsState ] = useState({
    postsData: [],
    renderStartIndex: 0,
    renderLimit: 10,
  });
  const currentInnerWidth = useSelector(state => state.currentInnerWidthReducer.currentInnerWidth);
  /* start point - end point = 이동한 거리 => transform으로 입력
    근데 굳이 end point를 사용할 필요가 있을까? 
    move 포인트.. 그걸 활용하면 그냥 그대로 될거같은데.
    마치 api 두번 호출하는 느낌
  */
  useEffect(() => {
    window.addEventListener('touchstart', e => {
      console.log(e.changedTouches[0].pageY);
    });
    
    axios.get(`http://localhost:5000/posts?page=${1}&limit=${10}`, {
      headers: {
        'Content-Type': 'application/json'
      }
        }).then(response => {
      console.log(response.data);
      setPostsState({...postsState, postsData: response.data});
    })
  }, []);
  return (
    <ImportParentWrapper>
      <Header/>
      <ImportCommunity>
        <h4>Kangbcgit Comment</h4>
        {
          postsState.postsData.map((item, index) => {
            return (
              <CoummunityPost order={item.id} name={item.name} title={item.title} postTime={'2023.09.28'} content={item.content} />
            )
          })
        }
        </ImportCommunity>
    </ImportParentWrapper>
  )
}

export default Main