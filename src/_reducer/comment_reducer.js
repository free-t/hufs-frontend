import {
  COMMENT_LIST,
  COMMENT_REMOVE,
  COMMENT_SAVE,
  COMMENT_LIKE,
} from "../_actions/types";

export default function comment(state = initialState, action) {
  const comments = state.comments;
  switch (action.type) {
    case COMMENT_SAVE:
      return {
        comments: comments.concat(action.comments),
      };
    case COMMENT_REMOVE:
      return {};
    case COMMENT_LIKE:
      //action.payload : commentId입니다.  map사용해서 해볼까?
    //   let y = comments.map((comment) => {
    //   if (comment.commentId === action.payload) {
    //     comment.commentId + 1;
    //   } 
    // });
      
      return {
        ...state,        
      };
    default:
      return state;
  }
}
// commentId를 시간으로..?
const initialState = {
  comments: [
    {
      postId: "1",
      commentId: "1",
      userId: "1",
      content: "1",
      date: "1",
      like: "1",
    },
    {
      postId: "1",
      commentId: "2",
      userId: "2",
      content: "2",
      date: "3",
      like: "3",
    },
    {
      postId: "1",
      commentId: "3",
      userId: "2",
      content: "2",
      date: "3",
      like: "3",
    },
    {
      postId: "1",
      commentId: "4",
      userId: "2",
      content: "2",
      date: "3",
      like: "3",
    },
  ],
};
