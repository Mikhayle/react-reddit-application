import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {TRootState} from "../store/reducer";

interface IPostItem {
    id?: string;
    title: string;
    thumbnailSrc: string;
    author: string;
    href?: string;
}

interface IPostList {
    list?: IPostItem[]
}

interface IResponseDataChildren {
    children: Array<object>
}

interface IResponseData {
    data: IResponseDataChildren
}

interface IResponse {
    data: IResponseData;
}

export function usePostData() {
    const [postList, setPostList] = useState<IPostList>({});
    const [loading, setLoading] = useState(false);
    const [loadingError, setLoadingError] = useState('');
    const token = useSelector<TRootState, string>(state => state.token);

    useEffect(() => {
        if(!token) return;

        async function load() {
            try {
                const { data: { data: {children} } } = await  axios.get(
                    'https://oauth.reddit.com/rising/',
                    {
                        headers: {Authorization: `bearer ${token}`},
                        params: {
                            limit: 10
                        }
                    }
                );
                setPostList(children);
            } catch(error) {
                setLoadingError(String(error));
            }
        }

        load();
    }, [token]);

    return postList;
}