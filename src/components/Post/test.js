import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {postRemove} from  '../../_actions/post_action'
// 상세 게시글 보기
// 게시글 내용 불러오기 ->
function PostView({ match, history }) {
  const [lists, setlists] = useState();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);  // post reducer에서 state.posts 가져옴 (배열)
   useEffect( () => {
    const post = posts.find((x) => x.id === +match.params.id);  // url과 동일한 id 검색 => 글 고유 번호
    setlists(post);
    console.log(match)
    console.log(post)
  }, []);

  const onDelete = () => {
    console.log(lists.id);
    dispatch(postRemove(lists.id))}

  return (
    <div>
      {lists ? (
        <div>
          <p>{lists.id}</p>
          <h2>{lists.title}</h2>
          <p>{lists.body}</p>
          <button onClick={onDelete}> 삭제하기</button>
        </div>
      ) : (
        "isLoading"
      )}
    </div>
  );
}

export default PostView;
