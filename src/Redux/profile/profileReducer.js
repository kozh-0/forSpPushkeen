import { ADD_COMMENTS, ADD_POSTS, RESET_COMMENTS, ADD_USER_POST_COMMENT } from "./profileAction";

const initialState = {
    posts: [],
    comments: []
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POSTS: {
            return {
                ...state,
                posts: action.posts
            };
        }
        case ADD_COMMENTS: {
            return {
                ...state,
                comments: action.comments
            };
        }
        case ADD_USER_POST_COMMENT: {
            return {
                ...state,
                comments: [...state.comments, action.POSTcomment]
            };
        }
        case RESET_COMMENTS: {
            return {
                ...state,
                comments: []
            };
        }

        default: {
            return state;
        }
    }
}