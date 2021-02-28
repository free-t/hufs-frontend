import axios from 'axios'
import {COMMENT_LIST, COMMENT_REMOVE, COMMENT_SAVE, COMMENT_LIKE} from './types'

export const commentSave = (dataToSubmit) => {
    //const req = axios.post("api", dataToSubmit).then(res => res.data)
    // dataToSubmit = {postId:'', userId:'', content:'', like:'',}
    return {
        type: COMMENT_SAVE,
        comments: dataToSubmit,
    }
}

export const commentLike = (commentId) => {
    // 보내야 하는 것: postId, commentId, userId
    //const req = axios.post("api", commentId).then(res => res.data)
    // 받는 req?  전체 comment state - > reducer에서 return ...state하면됨
    //            해당 commentId와 변한 LIKE? -> find해서 like만 수정?
    return {
        type: COMMENT_LIKE,
        payload: commentId
    }
    // 이미 like한 유저인지를 받아와서 -> if로 type:COMMENT_UNABLE 을 return하면 reducer에서 return {...comments, likesuccess:false하면될듯} 
}
// remove에 필요한 것. commentId, 유저의 권한 여부(작성자인가?), 
export const commentRemove = (commentId) => {


    return {
        type: COMMENT_REMOVE,
        // payload: req
    }
}