import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { commentLike } from "../../_actions/comment_action";

//  PostId 에 해당하는 comment DB에서 가져오기
//  {postId, UserId, Date or Key for Order, content, like}

// Post
function CommentList({ match }) {
  const { comments } = useSelector((state) => state.comment);
  const matchComments = comments.filter(
    (comment) => comment.postId === match.params.id
  );
  // 상세 게시글 url로 라우팅 될 때 axios로  DB에서 게시글 내용 + 댓글리스트를 가져온다.?
  // 그러면 useEffect(async로 비동기 처리해서 axios)
  // useEffect(async() => {
  //     const comments = await axios.get("댓글 list api").then(res => res.data)
  //     const matchComments = comments.filter(comment => comment.postId === match.params.id);
  // }, [])

  useEffect(() => {
    console.log(comments);
    console.log(matchComments);
    console.log(match.params.id);
  }, []);

  const dispatch = useDispatch();
  const likeHandler = (e) => {
      console.log(e.target.value)
      dispatch(commentLike(e.target.value))
  }
  return (
    <div>
      {matchComments.map((comment, index) => {
        return (
          <div key={index}>
            <span>유저 아이디: {comment.userId}</span>
            <span> 내용: {comment.content}</span>
            <span> 추천수: {comment.like} </span>
            <button value={comment.commentId} onClick={likeHandler}>추천하기</button>
          </div>
        );
      })}
    </div>
  );
}

export default CommentList;
