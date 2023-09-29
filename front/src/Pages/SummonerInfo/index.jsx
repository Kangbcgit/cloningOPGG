import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import actionApi from '../../redux/action/api';
import { useParams } from 'react-router-dom';
import { isHeaderImgLoad } from '../../redux/action/isHeaderImgLoad';
import Header from '../../components/styled-components/Header';

function SummonerInfo() {
  const params = useParams();
  const dispatch = useDispatch();
  const summonerInfoData = useSelector(state => state.summonerInfoDataReducer.summonerInfoData);
  const isHeaderImgLoadinRedux = useSelector(state => state.isHeaderImgLoad);
  const [apiCalled, setApiCalled] = useState(false);
  const postApi = async (name) => {
    await dispatch(actionApi.callApi(name));
    console.log('sum:',summonerInfoData);
    setApiCalled(true);
  }
  useEffect(() => {
    console.log(isHeaderImgLoadinRedux);
  }, [isHeaderImgLoadinRedux]);

  useEffect(() => {
    dispatch(isHeaderImgLoad(false));
    postApi(params.name);
  }, []);
  useEffect(() => {
    dispatch(isHeaderImgLoad(false));
    postApi(params.name);
  }, [params]);

  return (
    <>
    <Header/>
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
