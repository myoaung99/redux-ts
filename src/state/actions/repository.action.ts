import { ActionType } from "../action-types";

interface SearchRepositoryRequestAction {
  type: ActionType.SEARCH_REPOSITORY_REQUEST;
}

interface SearchRepositorySuccessAction {
  type: ActionType.SEARCH_REPOSITORY_SUCCESS;
  payload: string[];
}

interface SearchRepositoryErrorAction {
  type: ActionType.SEARCH_REPOSITORY_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoryRequestAction
  | SearchRepositorySuccessAction
  | SearchRepositoryErrorAction;
