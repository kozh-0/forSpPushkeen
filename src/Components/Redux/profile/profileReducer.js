import { ADD_POSTS } from "./profileAction";


export const profileReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_POSTS: {
            return {
                ...state,
                posts: action.posts
            };
        }

        default: {
            return state;
        }
    }
}