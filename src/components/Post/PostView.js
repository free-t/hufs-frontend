import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postRemove } from "../../_actions/post_action";

// 상세 게시글 보기
// 게시글 내용 불러오기 ->
function PostView({ match, history }) {
  const [lists, setlists] = useState();
  const dispatch = useDispatch();

  useEffect(async () => {
    const view = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data);
    const post = view.find((posts) => posts.id === +match.params.id);
    setlists(post);
  }, []);

  const onDelete = () => {
    console.log(lists.id)
    dispatch(postRemove(lists.id))
  }
  
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
