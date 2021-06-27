import axios from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCESS } from "../constants/userConstants";

export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const {data } = await axios.post("http://localhost:5000/api/users/login", {
            email,
            password
        });
        dispatch({
            type:USER_LOGIN_SUCESS,
            playload : data
        })
        // to save user ingo into local storage
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (err) {
        dispatch({
            type: USER_LOGIN_FAIL,
            playload:
            err.response && err.response.data.message ? err.response.data.message : err.message

        })
    }
}