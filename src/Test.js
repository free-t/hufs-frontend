import React, { useState } from 'react'

function Test() {
const [list, setlist] = useState(state.comments)
    const clickHandler = (e) => {
        console.log(e.target.value)
        console.log(list)
        const likedList = list.map(comment => {
            if(comment.commentId === e.target.value){
                return {...comment, like: comment.like +1, }
            } else {
                return comment;
            }
        })
        setlist(likedList);
    }
    
    return (
        <div>
            {list.map(comment => {
                return (<div>{comment.commentId} 좋아요: {comment.like} 버튼: <button onClick={clickHandler} value={comment.commentId}>버튼</button> </div>)
            })}
        </div>
    )
}

export default Test

let state = {comments:
    [{
      postId: "1",
      commentId: "2",
      userId: "2",
      content: "2",
      date: "3",
      like: 2,
    },
    {
      postId: "1",
      commentId: "3",
      userId: "2",
      content: "2",
      date: "3",
      like: 3,
    },
    {
      postId: "1",
      commentId: "4",
      userId: "2",
      content: "2",
      date: "3",
      like: 4,
    },
  ],
};
