import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postUpdate } from '../../_actions/post_action';
// 상세 게시글 보기
// 게시글 내용 불러오기 ->
function PostUpdate({ match, history }) {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const [updated, setupdated] = useState({
    title: '',
    content: '',
  });
  const post = posts.find((posts) => posts.id === +match.params.id);
  useEffect(() => {
    setupdated({ ...post });
  }, []);
  const onUpdate = () => {
    dispatch(postUpdate(updated))
      .then((res) => console.log(res))
      .then(history.goBack());
    //   .then(console.log(history.goback));
  };

  return (
    <div>
      {post ? (
        <div>
          <p>글 번호: {post.id}</p>
          <h2>제목 :</h2>{' '}
          <input
            onChange={(e) => setupdated({ ...updated, title: e.target.value })}
            value={updated.title}
          ></input>
          <p>
            내용{' '}
            <input
              onChange={(e) =>
                setupdated({ ...updated, content: e.target.value })
              }
              value={updated.content}
            ></input>
          </p>
          <p>추천수: {post.like}</p>
          <button onClick={onUpdate}>수정하기</button>
        </div>
      ) : (
        'isLoading'
      )}
    </div>
  );
}

export default withRouter(PostUpdate);
