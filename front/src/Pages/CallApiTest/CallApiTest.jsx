// CallApiTest.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'


function CallApiTest() {
  const [text, setText] = useState('');
  const [Riot, setRiot] = useState(null);
  // const getApi = async () => {
  //   axios.get("/api").then(res => setApiData(res.data));
  // }
  const postApi = async (name) => {
    axios.post(`http://localhost:5000/api/summoner/${name}`)
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
    </>
  );
}

export default CallApiTest;

