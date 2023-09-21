import axios from "axios";
import apiSlice from "../../slices/api";

const callApi = (name) => {
    console.log('name: ',name);
  return async (dispatch, getState) => {
    return axios.post(`http://localhost:5000/api/summoner/${name}`)
    .then((response) => {
      if (!response.status === 200) {
        throw new Error('서버 응답 오류: ' + response.status);
      }
      console.log('res: ', response.data);
      dispatch(apiSlice.actions.apiCall({summonerInfoData: response.data}));
      return response.data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });;
  }
}

const actionApi = {
  callApi
};

export default actionApi