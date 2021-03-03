import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postSave } from '../../_actions/post_action';
import { withRouter } from 'react-router-dom';
function PostEdit(props) {
  const [title, settitle] = useState('');
  const [content, setcontent] = useState('');
  const dispatch = useDispatch();
  const titleHandler = (e) => {
    settitle(e.target.value);
  };
  const contentHandler = (e) => {
    setcontent(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let body = {
      title: title,
      content: content,
      userId: 'userId',
    };
    dispatch(postSave(body)).then((res) => {
      if (res.req) {
        props.history.push('/list');
      } else {
        alert('error');
      }
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={titleHandler}
      />
      <input
        type="text"
        placeholder="내용"
        value={content}
        onChange={contentHandler}
      />
      <button onClick={submitHandler}>제출</button>
    </div>
  );
}

export default withRouter(PostEdit);
