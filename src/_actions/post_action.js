import axios from "axios";
import { POST_LIST, POST_REMOVE, POST_SAVE } from "./types";


export const postSave = (dataToSubmit) => {
  // const request = axios.post("url", dataToSubmit).then((res) => res.data);
  // dataToSubmit = {id:, title:, content:,}
  return {
    type: POST_SAVE,
    payload: {
      id: dataToSubmit.id,
      title: dataToSubmit.title,
      content: dataToSubmit.content
    }
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