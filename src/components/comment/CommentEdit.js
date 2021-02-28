import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { commentSave } from "../../_actions/comment_action";
function CommentEdit(props) {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const changeHandler = (e) => setContent(e.target.value);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");

    let body = {
      postId: props.match.params.id, // posturl
      userId: "userId", // to be changed
      content: content, 
      like: 0, 
      commentId: "300" // to be changed
    };
    // dispatch(commentSave(content, userId, postId))
    dispatch(commentSave(body))

    setContent("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="댓글을 입력하세요"
          value={content}
          onChange={changeHandler}
        />
        <button> 입력 </button>
      </form>
    </div>
  );
}

export default CommentEdit;
