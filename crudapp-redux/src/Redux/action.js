import * as types from "./actiontypes";
import axios from "axios";

const getUser = (payload) => ({
  type: types.GET_USER_DATA,
  payload,
});

export const getUserData = () => (dispatch) => {
  axios
    .get("http://localhost:8080/crudapp")
    .then((res) => {
     console.log(res) 
     dispatch(getUser(res.data))
     })
    .catch((e) => console.log(e));
};
