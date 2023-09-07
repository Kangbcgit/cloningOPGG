import express, { response } from "express";
import cors from 'cors';
import fetch from "node-fetch";

const router = express.Router();
const key = 'RGAPI-80b1e183-adbd-44c1-9ac8-e84515db307c';
router.use(cors({
  origin: "http://localhost:3000"
}));

// router.get("/", (req, res) => {
//   res.send("안녕하세요 API 입니다.");
// })
router.post('/api/summoner/:name', async (req, res) => {
  const summonerName = req.params.name;
  console.log(summonerName);

  try {
    const response = await fetch(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`, {
      method: 'GET',
      headers: {
        'X-Riot-Token': key, // API 키를 헤더에 포함시킵니다.
      },
    });

    if (!response.ok) {
      throw new Error('서버 응답 오류: ' + response.status);
    }

    const summonerData = await response.json();

    // 서버 응답을 클라이언트로 전송
    res.json(summonerData);

    // 서버 응답을 처리합니다.
    console.log('소환사 정보:', summonerData);
  } catch (error) {
    // 오류 처리
    console.error('Error:', error);
    // 오류 응답을 클라이언트로 전송
    res.status(500).json({ error: '서버 오류' });
  }
});






export default router;

/*
router.post('/api/summoner/:name', async (req, res) => {
  const summonerName = req.params.name;
  console.log(summonerName);
  fetch(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`, {
    method: 'GET',
    headers: {
      'X-Riot-Token': key, // API 키를 헤더에 포함시킵니다.
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('서버 응답 오류: ' + response.status);
      }
      const data = response.json();
      res.json(data);
      return data;
    }).then(summonerData => {
      // 서버 응답을 처리합니다.
      console.log('소환사 정보:', summonerData);
    })
    .catch(error => {
      // 오류 처리
      console.error('Error:', error);
    });
}) -- 잘못된 코드 await이 안써짐
 */

