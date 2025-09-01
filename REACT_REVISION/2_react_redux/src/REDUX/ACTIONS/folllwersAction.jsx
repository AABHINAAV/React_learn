import axios from "axios";
import { FETCH_FFLRS_FAIL, FETCH_FFLRS_REQ, FETCH_FFLRS_SUC } from "../actions";

const fetchFflrsReqObj = () => {
  return { type: FETCH_FFLRS_REQ };
};

const fetchFflrsSucObj = (fflrsData) => {
  return {
    type: FETCH_FFLRS_SUC,
    payload: fflrsData,
  };
};

const fetchFflrsFailObj = (expection) => {
  return {
    type: FETCH_FFLRS_FAIL,
    payload: expection,
  };
};

export const fetchFollwersDataFromAPI = (url) => {
  return async (dispatch) => {
    dispatch(fetchFflrsReqObj());

    try {
      let res = await axios.get(url);
      res = res.data;
    //   console.log(res)
      dispatch(fetchFflrsSucObj(res));
    } catch (exception) {
      dispatch(fetchFflrsFailObj(exception));
    }
  };
};
