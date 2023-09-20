import axios from "axios";

const callApi = (name) => {
  return async (dispatch, getState) => {
    axios.post(`http://localhost:5000/api/summoner/${name}`)
    .then((response) => {
      if (!response.status) {
        throw new Error('서버 응답 오류: ' + response.status);
      }
      dispatch({type: 'API_CALL', payload: {summonerInfo: response.data}});
    })
    .catch((error) => {
      console.error('Error:', error);
    });;
  }
}