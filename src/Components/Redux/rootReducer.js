import { combineReducers } from "redux";
import { usersReducer } from "./users/usersReducer";
import { profileReducer } from './profile/profileReducer';

export const rootReducer = combineReducers({
    users: usersReducer,
    profile: profileReducer
});