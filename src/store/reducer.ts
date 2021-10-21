import {Reducer} from "redux";
import {ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, SET_TOKEN, UPDATE_COMMENT} from "./me/action";
import {meReducer, MeState} from "./me/reducer";
import {LOAD_COUNTER, LOAD_TO_NULL, PostsState} from "./posts/actions";
import {postsReducer} from "./posts/reducer";



export type TRootState = {
    token: string;
    commentText: string;
    me: MeState
    posts: PostsState;
}

const initialState = {
    token: '',
    commentText: "Привет, SkillBox",
    me: {
        loading: false,
        error: '',
        data: {},
    },
    posts: {
        loadCounter: 0
    }
}

export const rootReducer: Reducer<TRootState> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text
            }

        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }

        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action)
            }

        case LOAD_COUNTER:
        case LOAD_TO_NULL:
            return {
                ...state,
                posts: postsReducer(state.posts, action)
            }

        default:
            return state;
    }
}