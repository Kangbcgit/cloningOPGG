import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import actionApi from '../../redux/action/api';
import { useParams } from 'react-router-dom';
import Header from '../../components/styled-components/Header';
import { debounce as _debounce } from 'lodash';
import styled from 'styled-components';
import axios from 'axios';

const UserInfo = styled.div`
  width: 100%;

  padding: 12px;

  color: white;
  background: var(--communityItem_bg);
`;
const UserInfoTop = styled.div`
  display: flex;
  
  &>.wrapImg {
    position: relative;
    width: 64px;
    height: 64px;
    &>img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 14px;
    }
    &>.level {
      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      left: 50%;
      top: 100%;
      transform: translate(-50%, -50%);


      width: fit-content;
      padding: 2px 10px;
      border-radius: 7px;

      font-size:  11px;

      background: black;
    }
  }
`;

const UserRank = styled.div`
&>.wrapImg {
  position: relative;
  width: 40px;
  height: 40px;

  border-radius: 50%;
  
  background: var(--rank_bg);

  overflow: hidden;
  &>img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 200%;
    height: 200%;
    object-fit: cover;
  }
}
`;
const UserInfoBottom = styled.div`
  display: flex;
  padding: 15px 0;
  ${UserRank} {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:first-child {
      border-right: 2px solid var(--community_bg);
    }
  }
`;

function SummonerInfo() {
  const params = useParams();
  const dispatch = useDispatch();
  const summonerInfoData = useSelector(state => state.summonerInfoDataReducer.summonerInfoData);
  const summonerInfoRank = useSelector(state => state.summonerInfoDataReducer.summonerInfoRank);
  const summonerinfoDataApiCall = async (name) => {
    await dispatch(actionApi.riotSummonerSearchApi(name));
  }
  const summonerinfoRankApiCall = async (summonerInfoData) => {
    await dispatch(actionApi.riotSummonerRankInfoApi(summonerInfoData));
  }
  useEffect(() => {
    summonerinfoDataApiCall(params.name);
  }, []);
  useEffect(() => {
    summonerinfoRankApiCall((summonerInfoData?.id));
  }, [summonerInfoData]);

  return (
    <>
      <Header/>
      <button onClick={e => {
        axios.post('http://localhost:5000/posts', {
          id: 2,
          name: '강븅찬2',
          title: '첫 post 게시글2',
          content: '아 아무튼 모코코라고2',
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
            }).then(response => {
          console.log(response.data);
        })
      }}>post</button>
      <button onClick={e => {
        axios.get(`http://localhost:5000/posts?page=${1}&limit=${10}`, {
          headers: {
            'Content-Type': 'application/json'
          }
            }).then(response => {
          console.log(response.data);
        })
      }}>get</button>
      <UserInfo>
        {summonerInfoData.name ? (
          <UserInfoTop>
          <div className="wrapImg">
            <img src={`https://ddragon.leagueoflegends.com/cdn/13.19.1/img/profileicon/${summonerInfoData.profileIconId}.png`} 
            alt="" />
            <div className="level">{summonerInfoData.summonerLevel}</div>
          </div>
          <h3>{summonerInfoData.name}</h3>
        </UserInfoTop>
        ) : null
        }
        {summonerInfoRank[0]?.tier ?
          <UserInfoBottom>
            <UserRank>
              <span>개인 랭크</span>
              <div className="wrapImg">
                <img src={`${process.env.PUBLIC_URL}/images/rank/${summonerInfoRank[0].tier === 'EMERALD' ? 'DIAMOND' : summonerInfoRank[0].tier}.png`} alt="" />
              </div>
              <h2>{summonerInfoRank[0].tier}{summonerInfoRank[0].rank}</h2>
              <span>{summonerInfoRank[0].wins}승 {summonerInfoRank[0].losses}패 승률:{Math.floor((summonerInfoRank[0].wins / (summonerInfoRank[0].wins + summonerInfoRank[0].losses)) * 100)}%</span>
            </UserRank>
            <UserRank>
              <span>자유  랭크</span>
              <div className="wrapImg">
                <img src={`${process.env.PUBLIC_URL}/images/rank/${summonerInfoRank[1].tier === 'EMERALD' ? 'DIAMOND' : summonerInfoRank[1].tier}.png`} alt="" />
              </div>
              <h2>{summonerInfoRank[1].tier}{summonerInfoRank[0].rank}</h2>
              <span>{summonerInfoRank[1].wins}승 {summonerInfoRank[1].losses}패 승률:{Math.floor((summonerInfoRank[1].wins / (summonerInfoRank[1].wins + summonerInfoRank[1].losses)) * 100)}%</span>
            </UserRank>
          </UserInfoBottom> : null
        }
      </UserInfo>
    </>
  )
}

export default SummonerInfo
