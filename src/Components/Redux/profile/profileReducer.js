import { ADD_POSTS, GET_SINGLE_USER } from "./profileAction";


export const profileReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_POSTS: {
            return {
                ...state,
                posts: action.posts
            };
        }
        case GET_SINGLE_USER: {
            return {
                ...state,
                userInfo: action.userInfo
            };
        }
        default: {
            return state;
        }
    }
}