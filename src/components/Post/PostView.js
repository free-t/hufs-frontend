import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { postLike, postRemove, postUpdate } from '../../_actions/post_action';
import CommentEdit from '../comment/CommentEdit';
import CommentList from '../comment/CommentList';
// 상세 게시글 보기
// 게시글 내용 불러오기 ->
function PostView({ match, history }) {
  const [lists, setlists] = useState();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    const post = posts.find((posts) => posts.id === +match.params.id);
    setlists(post);
  }, [posts]);

  const onDelete = () => {
    console.log(lists.id);
    dispatch(postRemove(lists.id));
    history.push('/list');
  };
  const onLike = () => {
    console.log(lists.id);
    dispatch(postLike(lists.id));
  };
  const onUpdate = () => {
    dispatch(postUpdate());
  };

  return (
    <div>
      {lists ? (
        <div>
          <p>{lists.id}</p>
          <h2>{lists.title}</h2>
          <p>{lists.content}</p>
          <p>추천수: {lists.like}</p>
          <button onClick={onDelete}> 삭제하기</button>
          <button onClick={onLike}> 추천하기</button>
          <Link to={`${lists.id}/update`}>
            <button>수정하기</button>
          </Link>
        </div>
      ) : (
        'isLoading'
      )}
      <CommentList match={match} />
      <CommentEdit match={match} />
    </div>
  );
}

export default withRouter(PostView);
