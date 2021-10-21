import {Reducer} from 'react';
import {LOAD_COUNTER, TLoadCounter, TLoadToNull} from "./actions";

export type TPosts = {
    loadCounter: number;
}

type TPostsActions = TLoadCounter | TLoadToNull;


export const postsReducer: Reducer<TPosts, TPostsActions> = (state, action) => {
    switch (action.type) {
        case LOAD_COUNTER:
            return {
                ...state,
                loadCounter: state.loadCounter + 1
            }

        case "LOAD_TO_NULL":
            return {
                ...state,
                loadCounter: 0
            }
    }
}