import { combineReducers } from "redux";
import RepositoryReducer from "./repository.reducer";

const reducers = combineReducers({
  repositories: RepositoryReducer,
});

export default reducers;
