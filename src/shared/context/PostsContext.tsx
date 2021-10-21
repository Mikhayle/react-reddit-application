import React from "react";
import {usePostData} from "../../hooks/usePostData";
//
interface IPostItem {
    title: string;
    thumbnailSrc: string;
    author: string;
    href?: string;
}

interface IPostList {
    list?: IPostItem[]
}

export const PostsContext = React.createContext<IPostList>({});

export function PostContextProvider({ children }: { children: React.ReactNode }) {
    const list = usePostData();

    return (
        <PostsContext.Provider value={list}>
            {children}
        </PostsContext.Provider>
    )
}