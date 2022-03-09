import { combineReducers } from "redux";
import fetchUser from "./api";

const rootReducer = combineReducers({
    fetchUser,
})

export default rootReducer;