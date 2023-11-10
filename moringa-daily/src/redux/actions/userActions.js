import {
  getUsersFail,
  getUsersStart,
  getUsersSuccess,
  loginFail,
  loginStart,
  loginSuccess,
  logoutUser,
  registerFail,
  registerStart,
  registerSuccess,
  upgradeUserFail,
  upgradeUserStart,
  upgradeUserSuccess
} from "../slices/userSlices";
import axios from "axios";
import { BASE_URL} from "../../URL";

export const register = (details) => async (dispatch) => {
  dispatch(registerStart());
  try {
    const { data } = await axios.post(`${BASE_URL}/signup`, details);
    dispatch(registerSuccess(data));
  } catch (err) {
    dispatch(
      registerFail(err.response ? err.response.data.message : err.message)
    );
  }
};

export const login = (details) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const { data } = await axios.post(`${BASE_URL}/login`, details);
    dispatch(loginSuccess(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch(loginFail(err.response ? err.response.data.message : err.message));
  }
};

export const upgradeUser = (id) => async (dispatch) => {
  try {
    dispatch(upgradeUserStart());

    await axios.put(`${BASE_URL}/user/upgrade/${id}`);

    dispatch(upgradeUserSuccess());
  } catch (err) {
    dispatch(
      upgradeUserFail(err.response ? err.response.data.message : err.message)
    );
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch(logoutUser());
};

// LIST USERS
export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch(getUsersStart());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`${BASE_URL}/users`, config);

    dispatch(getUsersSuccess(data));
  } catch (err) {
    dispatch(getUsersFail("Error listing users..."));
  }
};
