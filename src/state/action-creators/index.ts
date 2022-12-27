import axios from "axios";
import { Dispatch } from "react";
import { Action } from "../actions/repository.action";
import { ActionType } from "../action-types";

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORY_REQUEST,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      )!;

      const names = data.object.map(
        (result: any) => result.package.name
      ) as string[];

      dispatch({
        type: ActionType.SEARCH_REPOSITORY_SUCCESS,
        payload: names,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORY_ERROR,
        payload: err.message,
      });
    }
  };
};
