import axios from "axios";
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCESS,
    USER_LOGIN_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCESS,
    USER_REGISTER_FAIL,
} from "../constants/userConstants";

export const logout = () => async (dispatch) => {
    dispatch({
        type: USER_LOGIN_LOGOUT,
    });
    localStorage.removeItem("userInfo");
};

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });

        const { data } = await axios.post("http://localhost:5000/api/users/login", {
            email,
            password,
        });
        dispatch({
            type: USER_LOGIN_SUCESS,
            playload: data,
        });
        // to save user ingo into local storage
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (err) {
        dispatch({
          type: USER_LOGIN_FAIL,
          payload:
            err.response && err.response.data.message
              ? err.response.data.message
              : err.message,
        });
    }
};

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST,
        });

        const { data } = await axios.post("http://localhost:5000/api/users", {
            name,
            email,
            password,
        });
        dispatch({
            type: USER_REGISTER_SUCESS,
            playload: data,
        });
        // to save user ingo into local storage
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (err) {
        dispatch({
          type: USER_REGISTER_FAIL,
          payload:
            err.response && err.response.data.message
              ? err.response.data.message
              : err.message,
        });
    }
};
