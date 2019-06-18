import streams from "../apis/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "./types";
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

/*asynch action creators for REST operations*/
export const createStream = formValues => async dispatch => {
  const response = await streams.post("/streams", formValues);
  dispatch({ type: CREATE_STREAM, payload: response.data });
};
/* fetch single stream*/
export const fetchSteams = () => async dispatch => {
  const response = await streams.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};
/* fetch all streams*/
export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};
/* edit a stream*/
export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.put(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
};
/* delete a stream*/
export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/$(id)`);
  dispatch({ type: DELETE_STREAM, payload: id });
};
