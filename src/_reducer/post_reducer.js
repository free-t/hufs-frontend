import { POST_LIST, POST_REMOVE, POST_SAVE } from "../_actions/types";

export default function post(state = initialState, action) {
  let posts = state.posts;

  switch (action.type) {
    case POST_SAVE:
        return {
            posts: state.posts.concat(action.payload),
            selected: {}
        }
    case POST_REMOVE:
      return {
        ...state,
        posts: posts.filter((post) => post.id !== action.id),
        selectedBoard: {},
        deleteSuccess: true
      };
    case POST_LIST:
        return {
            posts: state.posts.concat(action.initialList)
        }
    default:
      return state;
  }
}

const initialState = {
  maxNo: 0,
  posts: [
    // {
    //   id: "",
    //   title: "",
    //   content: "",
    // },
    
  ],
  selected: {},
};
