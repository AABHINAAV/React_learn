import axios from "axios";
import { FETCH_FAIL, FETCH_REQ, FETCH_SUC } from "../actions";

const fetchReqObj = () => {
  return { type: FETCH_REQ };
};

const fetchSucObj = (res) => {
  return { type: FETCH_SUC, payload: res };
};

const fetchFailObj = (exception) => {
  return { type: FETCH_FAIL, payload: exception };
};

export const fetchUserDataFromAPI = (userid) => {
    console.log(userid)
  return async (dispatch) => {
    console.log(userid)
    dispatch(fetchReqObj());
    console.log(userid)

    try {
      let res = await axios.get(`https://api.github.com/users/${userid}`);
      let data = res.data;
      console.log(data);
      dispatch(fetchSucObj(data));
    } catch (e) {
        console.log(e)
      dispatch(fetchFailObj(e));
    }
  };
};
