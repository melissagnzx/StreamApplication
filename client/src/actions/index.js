import streams from "../apis/streams";
import { SIGN_IN, SIGN_OUT } from "./types";
export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
/*asynch action creator*/
export const createStream = formValues => async dispatch => {
  streams.post("/streams", formValues);
};