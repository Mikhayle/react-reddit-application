import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TRootState} from "../store/reducer";
import {saveToken} from "../store/me/action";

export function useToken() {
    const token = useSelector<TRootState, string>(state => state.token)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(saveToken());
    }, [])
    return [token];
}


