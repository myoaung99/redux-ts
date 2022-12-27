import { ActionType } from "../action-types";
import { Action } from "../actions/repository.action";

interface RepositoryReducer {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialValue: RepositoryReducer = {
  loading: false,
  error: null,
  data: [],
};

type Reducer = (state: RepositoryReducer, action: Action) => RepositoryReducer;

const RepositoryReducer: Reducer = (state = initialValue, action) => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORY_REQUEST:
      return { ...state, loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORY_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORY_ERROR:
      return { ...state, loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default RepositoryReducer;
