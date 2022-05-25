import { ADD_COMMENTS, ADD_POSTS, RESET_COMMENTS } from "./profileAction";


export const profileReducer = (state = {}, action) => {
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