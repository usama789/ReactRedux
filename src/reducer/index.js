import Counter from "./counter";
import { combineReducers,applyMiddleware } from "redux";

const rootReducer = combineReducers(
    {Counter}
);

export default rootReducer;