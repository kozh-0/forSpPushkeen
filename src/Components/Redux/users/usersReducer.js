import { ADD_USERS, RESET_USERS } from "./usersActions";


export const usersReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_USERS: {
            return action.users;
        }
        case RESET_USERS: {
            return [];
        }
    
        default: {
            return state;
        }
    }
}