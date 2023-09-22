// CallApiTest.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import actionApi from '../../redux/action/api';
import { useDispatch, useSelector } from 'react-redux';


function CallApiTest() {
  const [text, setText] = useState('');
  const [apiCalled, setApiCalled] = useState(false);
  const dispatch = useDispatch();
  const summonerInfoData = useSelector(state => state.summonerInfoDataReducer.summonerInfoData);
  // const getApi = async () => {
  //   axios.get("/api").then(res => setApiData(res.data));
  // }
  const postApi = async (name) => {
    await dispatch(actionApi.callApi(name));
    console.log('sum:',summonerInfoData);
    setApiCalled(true);
  }

  const getInput = e => {
    console.log(e.target.value);
    setText(`${e.target.value}`)
  }


  return (
    <>
      <h1>아래 input area에 summoner id를 입력해주세요</h1>
      <input type="text" onChange={getInput} onKeyDown={e => {
        if (e.key === 'Enter') postApi(e.currentTarget.value);
      }}/>
      {apiCalled ? (
        <><h3>{summonerInfoData.name}</h3>
      <div className="wrapImg">
        <img src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/profileicon/${summonerInfoData.profileIconId}.png`} alt="" />
      </div>
      <div>Level: {summonerInfoData.summonerLevel}</div></>
      ) : null
      }
      
    </>
  );
}

export default CallApiTest;

