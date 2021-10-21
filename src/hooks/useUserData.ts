import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TRootState} from "../store/reducer";
import {IUserData, meRequestAsync} from "../store/me/action";

export function useUserData() {
    const data = useSelector<TRootState, IUserData>(state => state.me.data);
    const loading = useSelector<TRootState, boolean>(state => state.me.loading);
    const token = useSelector<TRootState>(state => state.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!token) return;
        dispatch(meRequestAsync())
    }, [token])
    return {
        data, loading
    }
}