import axios from "axios";
import { POST_LIST, POST_REMOVE, POST_SAVE } from "./types";

// redux-promise returns promise and can use async/await here
// reudx-chunk returns function
export const postSave = async (dataToSubmit) => {
  // const request = axios.post("url", dataToSubmit).then((res) => res.data);
  // dataToSubmit = {id:, title:, content:,}
  const request = await axios.post("https://reqres.in/api/users").then(res => res.data)
  return {
    type: POST_SAVE,
    payload: dataToSubmit,
    // saveSuccess: true,
    req: request,
  };
};
export const postRemove =  (postId) => {
  // const request = axios.delete("url", boardId).then((res) => res.data);
  return {
    type: POST_REMOVE,
    id: postId,  
  };
};

export const postList = (initialList) => {
  return {
    type: POST_LIST,
    initialList: initialList,
  }
}
// export const boardSelected = (postId) => ({
//   type: SELECTED,
//   postId
// });