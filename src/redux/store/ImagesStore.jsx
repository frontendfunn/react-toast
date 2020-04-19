import { createStore, applyMiddleware } from "redux";
import ImagesReducer from "../reducers/ImagesReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const ImagesStore = createStore(
  ImagesReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default ImagesStore;
