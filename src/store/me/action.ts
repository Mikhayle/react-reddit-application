import {Action, ActionCreator, AnyAction} from "redux";
import {ThunkAction} from "redux-thunk";
import {TRootState} from "../reducer";
import axios from "axios";

export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const SET_TOKEN = 'SET_TOKEN';
export const ME_REQUEST = 'ME_REQUEST';
export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';

export interface IUserData {
    name?: string;
    iconImg?: string;
}

type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT;
    text: string;
}

export type MeRequestAction = {
    type: typeof ME_REQUEST;
}

export type MeRequestSuccessAction = {
    type: typeof ME_REQUEST_SUCCESS;
    data: IUserData;
}

export type MeRequestErrorAction = {
    type: typeof ME_REQUEST_ERROR;
    error: string;
}

export const meRequest: ActionCreator<MeRequestAction> = () => ({
    type: ME_REQUEST
});

export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data: IUserData) => ({
    type: ME_REQUEST_SUCCESS,
    data,
});

export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => ({
    type: ME_REQUEST_ERROR,
    error,
});

export const setToken: ActionCreator<AnyAction> = (token) => (
    {
        type: SET_TOKEN,
        token
    }
)

export const updateComment: ActionCreator<AnyAction> = (text) => (
    {
        type: UPDATE_COMMENT,
        text
    }
);

export const meRequestAsync = (): ThunkAction<void, TRootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(meRequest())
    axios.get(
        'https://oauth.reddit.com/api/v1/me',
        {
            headers: { Authorization: `bearer ${getState().token}` }
        }
    )
    .then((resp) => {
        const userData = resp.data;
        dispatch(meRequestSuccess({ name: userData.name, iconImg: userData.icon_img }));
    })
    .catch((error) => {
        dispatch(meRequestError(String(error)));
    })
}

export const saveToken = (): ThunkAction<void, TRootState, unknown, Action<string>> => (dispatch) => {
    const token = window.__token__ || localStorage.getItem('token');
    dispatch(setToken(token));
    if (token) {
        localStorage.setItem('token', token);
    }
}