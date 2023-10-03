import express, { response } from "express";
import cors from 'cors';
import axios from "axios";

const router = express.Router();
const key = 'RGAPI-80b1e183-adbd-44c1-9ac8-e84515db307c';

router.use(cors({
  origin: "http://localhost:3500"
}));

/** riot api에서 summoner name 검색 */
router.post('/api/summoner/:name', async (req, res) => {
  const summonerName = req.params.name;
  console.log(summonerName);

  try {
    const response = await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`, {
      headers: {
        'X-Riot-Token': key, // API 키를 헤더에 포함시킵니다.
      },
    });

    if (response.status !== 200) {
      throw new Error('서버 응답 오류: ' + response.status);
    }

    const summonerData = response.data;

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
/** 자동완성 opgg 도둑질 */
router.get('/api/wordCompletion/summoner/:name', async (req, res) => {
  const summonerName = req.params.name;
  console.log(summonerName);
  axios.get(`https://op.gg/api/v1.0/internal/bypass/summoners/kr/autocomplete?keyword=${summonerName}`).then(response => {
    if (response.status !== 200) {
      throw new Error('이 오류의 코드는', response.status ,'입니다');
    }
    res.json(response.data);

  });
});

router.get('/api/summoner/rank/:ID', async (req, res) => {
  const summonerID = req.params.ID;
  console.log(summonerID);
  axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerID}`, {
      headers: {
        'X-Riot-Token': key, // API 키를 헤더에 포함시킵니다.
      },
    }).then(response => {
    if (response.status !== 200) {
      throw new Error('이 오류의 코드는', response.status ,'입니다');
    }
    console.log(response.data);
    res.json(response.data);
  });
});
export default router;
