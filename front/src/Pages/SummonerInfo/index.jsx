import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import actionApi from '../../redux/action/api';
import { useLocation, useParams } from 'react-router-dom';

function SummonerInfo() {
  const params = useParams();
  const dispatch = useDispatch();
  const summonerInfoData = useSelector(state => state.summonerInfoDataReducer.summonerInfoData);
  const [apiCalled, setApiCalled] = useState(false);
  const postApi = async (name) => {
    await dispatch(actionApi.callApi(name));
    console.log('sum:',summonerInfoData);
    setApiCalled(true);
  }

  useEffect(() => {
    postApi(params.nameg);
  }, []);

  return (
    <>
      <h1>아래 input area에 summoner id를 입력해주세요</h1>
      {apiCalled ? (
        <>
        <h3>{summonerInfoData.name}</h3>
        <div className="wrapImg">
          <img src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/profileicon/${summonerInfoData.profileIconId}.png`} alt="" />
        </div>
        <div>Level: {summonerInfoData.summonerLevel}</div>
      </>
      ) : null
      }
      
    </>
  )
}

export default SummonerInfo
