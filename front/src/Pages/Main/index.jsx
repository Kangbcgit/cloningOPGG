import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { WrapImg, WrapMobileModal, Wrapper } from '../../components/styled-components/Wrapper'
import { ImportLink, SlideNav } from '../../components/styled-components/Nav'
import { Commnunity, CommunityItem } from '../../components/styled-components/Community'
import CoummunityPost from '../../components/CommunityPost'
import Header from '../../components/styled-components/Header'

const ImportCommunity = styled(Commnunity)`

`;
const ImportParentWrapper = styled(Wrapper)``;
const ImportMainMobileNav = styled(SlideNav)``;


  



function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let touchStartPoint = 0;
  const touchState = useState({
    startPoint: 0,
    endPoint: 0
  })
  const currentInnerWidth = useSelector(state => state.currentInnerWidthReducer.currentInnerWidth);
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
  const searchSummonersInfo = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      navigate(`/summonerInfo/${e.target.value}`);
    }
  }
  useEffect(() => {
    window.addEventListener('touchstart', e => {
    console.log(e.changedTouches[0].pageY);
});});
  return (
    <ImportParentWrapper>
      <Header/>
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
        <CoummunityPost order={1} title={'안녕하세요 게시글 입니다.'} postTime={'2023.09.28'} nickname={'아나까떼'}>  
        </CoummunityPost>
        <CoummunityPost order={1} title={'안녕하세요 게시글 입니다.'} postTime={'2023.09.28'} nickname={'아나까떼'}>  
        </CoummunityPost>
        <CoummunityPost order={1} title={'안녕하세요 게시글 입니다.'} postTime={'2023.09.28'} nickname={'아나까떼'}>  
        </CoummunityPost>
        <CoummunityPost order={1} title={'안녕하세요 게시글 입니다.'} postTime={'2023.09.28'} nickname={'아나까떼'}>  
        </CoummunityPost>
        <CoummunityPost order={1} title={'안녕하세요 게시글 입니다.'} postTime={'2023.09.28'} nickname={'아나까떼'}>  
        </CoummunityPost>
        <CoummunityPost order={1} title={'안녕하세요 게시글 입니다.'} postTime={'2023.09.28'} nickname={'아나까떼'}>  
        </CoummunityPost>
        </ImportCommunity>
    </ImportParentWrapper>
  )
}

export default Main