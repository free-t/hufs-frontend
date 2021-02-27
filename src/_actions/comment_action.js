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
    return {
        type: COMMENT_LIKE,
        payload: commentId
    }
}
// remove에 필요한 것. commentId, 유저의 권한 여부(작성자인가?), 
export const commentRemove = (commentId) => {


    return {
        type: COMMENT_REMOVE,
        // payload: req
    }
}