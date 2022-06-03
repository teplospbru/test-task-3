import { COMMENTS_FETCH, COMMENT_SEND, POSTS_FETCH, SET_COMMENT_BODY, SET_COMMENT_EMAIL, SET_COMMENT_NAME, SET_POST, SET_USER, USERS_FETCH } from "./constants"

const initialState = {
    users: {},
    userId: '',
    user: '',
    posts: '',
    postId: '',
    post: '',
    comments: '',
    myComment: {},
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case USERS_FETCH:
            return {
                ...state, users: action.payload
            }
        case SET_USER:
            return {
                ...state, 
                userId: action.payload,
                user: state.users.filter(user => user.id == action.payload)[0],
                
            }
        case POSTS_FETCH:
            return {
                ...state,
                posts: action.payload
            }
        case SET_POST:
            return {
                ...state, 
                post: state.posts.filter(post => post.id == action.payload)[0],
                postId: action.payload,
            }
        case COMMENTS_FETCH:
            return {
                ...state, comments: action.payload
            }
        case SET_COMMENT_NAME:
            return {
                ...state, 
                myComment: { ...state.myComment, name: action.payload }
            }
        case SET_COMMENT_EMAIL:
            return {
                ...state, 
                myComment: { ...state.myComment, email: action.payload }
            }
        case SET_COMMENT_BODY:
            return {
                ...state, 
                myComment: { ...state.myComment, body: action.payload }
            }
        case COMMENT_SEND:
            return {
                ...state, 
                myComment: { ...state.myComment, name: '', email: '', body: '', response: action.payload }
            }
        default:
            return state
    }
}