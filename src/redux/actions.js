import { COMMENTS_FETCH, COMMENT_SEND, POSTS_FETCH, SET_COMMENT_BODY, SET_COMMENT_EMAIL, SET_COMMENT_NAME, SET_POST, SET_USER, USERS_FETCH } from "./constants";

// Получаем пользователей с сервера
export const usersFetch = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then((response) => response.json())
            .then((json) => dispatch({ type: USERS_FETCH, payload: json }));
        
    }
}

// Устанавливаем userId
export const setUser = (id) => {
    return {
        type: SET_USER,
        payload: id
    }
}

// Получаем посты с сервера
export const fetchPosts = (id) => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts?_limit=6`)
            .then((response) => response.json())
            .then((json) => dispatch({ type: POSTS_FETCH, payload: json }));
    } 
}

// устанавливаем postId
export const setPost = (id) => {
    return {
        type: SET_POST,
        payload: id
    }
}

// Получаем комментарии с сервера
export const fetchComments = (id) => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments?_limit=3`)
            .then((response) => response.json())
            .then((json) => dispatch({ type: COMMENTS_FETCH, payload: json }));
    }
}

// Три экшена ниже работают с инпутами формы отправки комментария
export const setCommentName = (value) => {
    return {
        type: SET_COMMENT_NAME,
        payload: value
    }
}

export const setCommentEmail= (value) => {
    return {
        type: SET_COMMENT_EMAIL,
        payload: value
    }
}

export const setCommentBody = (value) => {
    return {
        type: SET_COMMENT_BODY,
        payload: value
    }
}

// Отправляем свой комментарий на сервер
export const commentSend = (userId, postId, name, email, body) => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comment`, {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                body,
                userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => dispatch({ type: COMMENT_SEND, payload: json }));
    }
}