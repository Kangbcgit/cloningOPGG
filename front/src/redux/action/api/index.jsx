import axios from "axios";
import apiSlice from "../../slices/api";

const riotSummonerSearchApi = (name) => {
    // console.log('name: ',name);
  return async (dispatch, getState) => {
    return axios.post(`http://localhost:5000/api/summoner/${name}`)
    .then((response) => {
      if (!response.status === 200) {
        throw new Error('서버 응답 오류: ' + response.status);
      }
      // console.log('res: ', response.data);
      dispatch(apiSlice.actions.apiCall({type: 'riotSummonerSearch', summonerInfoData: response.data}));
      return response.data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });;
  }
}

const opggSummonerWordCompletion = name => {
  return async (dispatch, getState) => {
    if (name !== '') {
      try {
        axios.get(
        `http://localhost:5000/api/wordCompletion/summoner/${name}`).then(response => {
          if (!response.status === 200) {
            throw new Error('서버 응답 오류: 에러코드' + response.status);
          }
          dispatch(apiSlice.actions.apiCall({
            type:  'opggSummonerWordCompletion',
            data: response.data, 
            error: false,
          }))
        });
      } catch {
        dispatch(apiSlice.actions.apiCall({
          type: 'opggSummonerWordCompletion',
          error: true,
        }))
      }
    }
    
  }
}

const actionApi = {
  riotSummonerSearchApi,
  opggSummonerWordCompletion
};

export default actionApi