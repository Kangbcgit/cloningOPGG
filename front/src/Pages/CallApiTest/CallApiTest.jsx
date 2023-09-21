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
      <h1>안녕하세요 프론트 페이지 입니다.</h1>
      
      {/* <button onClick={postApi}>눌러라</button> */}
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

