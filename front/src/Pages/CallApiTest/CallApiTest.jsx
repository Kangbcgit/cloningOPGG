// CallApiTest.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'


function CallApiTest() {
  const [apiData, setApiData] = useState();
  const [Riot, setRiot] = useState(null);
  // const getApi = async () => {
  //   axios.get("/api").then(res => setApiData(res.data));
  // }
  const postApi = async () => {
    axios.post("http://localhost:5000/api/summoner/hide on bush")
    .then((response) => {
      if (!response.status) {
        throw new Error('서버 응답 오류: ' + response.status);
      }
      setRiot(response.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });;
  }
  useEffect(() => {
    console.log(Riot);
  },[Riot])
  return (
    <>
      <h1>안녕하세요 프론트 페이지 입니다.</h1>
      <div>데이터 : {apiData}</div>
      
      <button onClick={postApi}>눌러라</button>
    </>
  );
}

export default CallApiTest;

