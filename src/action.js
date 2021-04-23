import Axios from "axios";

export const fetchPosts = () => async (dispatch, getState) => {
  dispatch({ type: "FETCH_POSTS_REQUEST" });

  try {
    const response = await Axios.get(
      "https://jsonplaceholder.cypress.io/todos" //send response
    );

    dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_POSTS_FAILURE", error });
  }
};

// export const fetchPosts = () => {
//   return async (dispatch, getState) => {
//     const response = await Axios.get(
//       "https://jsonplaceholder.cypress.io/todos" //send response
//     );
//     console.log(response.data);
//     dispatch({
//       type: "FETCH_POSTS", //once we get a response we'll maually dispatch our action object
//       payload: response.data,
//     });
//   };
// };

// export const fetchPosts = () => {
//   const promise = Axios.get("https://jsonplaceholder.cypress.io/todos");

//   return {
//     type: "FETCH_POSTS",
//     payload: promise.data,
//   };
// };
