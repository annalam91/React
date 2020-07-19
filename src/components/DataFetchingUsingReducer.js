import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: "Oops! Something went wrong.",
      };
    default:
      return state;
  }
};
function DataFetchingUsingReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      dispatch({type:'FETCH_SUCCESS', payload: response.data})
    })
    .catch( error =>{
      dispatch({type:'FETCH_ERROR'})
    })
  }, [])

  return (
    <div>
      <h3>Data Fetching using Axios and useReducer</h3>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingUsingReducer;
