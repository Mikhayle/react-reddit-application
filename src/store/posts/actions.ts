import {ActionCreator} from "redux";

export type PostsState = {
    loadCounter: number;
}

export const LOAD_COUNTER = 'LOAD_COUNTER';
export type TLoadCounter = {
    type: typeof LOAD_COUNTER;
}

export const loadCounter: ActionCreator<TLoadCounter> = () => {
    return {
        type: LOAD_COUNTER
    }
}


export const LOAD_TO_NULL = 'LOAD_TO_NULL';
export type TLoadToNull = {
    type: typeof LOAD_TO_NULL;
}

export const loadToNull: ActionCreator<TLoadToNull> = () => {
    return {
        type: LOAD_TO_NULL
    }
}