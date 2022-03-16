import { SIGN_UP, SIGN_UP_FAIL, SIGN_UP_SUCCESS } from "./actionType";
import axios from "axios"

export const userSignUp = (newUser) => async (dispatch) => {
  dispatch({ type: SIGN_UP });
  try {
      const res=await axios.post("/user/signUp",newUser)
      dispatch({
          type:SIGN_UP_SUCCESS,
          payload:res.data
      })
  } catch (error) {
    dispatch({
      type: SIGN_UP_FAIL,
      payload: error.response.data
    });
  }
};
