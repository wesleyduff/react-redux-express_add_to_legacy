import { createStore } from "redux";
import rootReducer from "./_reducers";
//https://github.com/zalmoxisus/redux-devtools-extension#usage
export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);