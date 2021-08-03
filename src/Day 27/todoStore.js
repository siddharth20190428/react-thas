import { createStore, applyMiddleware } from "redux";
import rootReducer from "../Day 27/reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
