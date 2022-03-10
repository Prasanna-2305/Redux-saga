import { combineReducers } from "redux";
import fetchUser from "./api";

const rootReducer = combineReducers({
    sagas:fetchUser,
})

export default rootReducer;