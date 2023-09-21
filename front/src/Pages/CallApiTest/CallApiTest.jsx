// CallApiTest.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import actionApi from '../../redux/action/api';
import { useSelector } from 'react-redux';


function CallApiTest() {
  const [text, setText] = useState('');
  const [Riot, setRiot] = useState(null);
  const [apiCalled, setApiCalled] = useState(false);
  const summonerInfoData = useSelector(state => state.summonerInfoData);
  // const getApi = async () => {
  //   axios.get("/api").then(res => setApiData(res.data));
  // }
  const postApi = async (name) => {
    await actionApi(name);
    setApiCalled(true);
  }

  const getInput = e => {
    console.log(e.target.value);
    setText(`${e.target.value}`)
  }

  useEffect(() => {
    console.log(Riot);
  },[Riot])
  return (
    <>
      <h1>안녕하세요 프론트 페이지 입니다.</h1>
      
      {/* <button onClick={postApi}>눌러라</button> */}
      <input type="text" onChange={getInput} onKeyDown={e => {
        if (e.key === 'Enter') postApi(e.target.value);
      }}/>
      {apiCalled ? (
        <><h3>{Riot.name}</h3>
      <div className="wrapImg">
        <img src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/profileicon/${Riot.profileIconId}.png`} alt="" />
      </div>
      <div>Level: {Riot.summonerLevel}</div></>
      ) : null
      }
      
    </>
  );
}

export default CallApiTest;

