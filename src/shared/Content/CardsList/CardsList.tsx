import React, {useEffect, useRef, useState} from 'react';
import styles from './cardslist.sass';
import {Card} from "./Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {TRootState} from "../../../store/reducer";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;
import {loadCounter, loadToNull} from "../../../store/posts/actions";
import {Link} from "react-router-dom";

export interface IPostItem {
    id?: string;
    title?: string;
    thumbnailSrc?: string;
    author?: string;
    href?: string;
}

export interface IPostList {
    list?: IPostItem[]
}

export function CardsList() {
    // const {list}: IPostList = useContext(PostsContext);
    const token = useSelector<TRootState, string>(state => state.token);
    const [postList, setPostList] = useState<any[]>([]);
    const [nextAfter, setNextAfter] = useState('');
    const [loading, setLoading] = useState(false);
    const [loadingError, setLoadingError] = useState('');
    const bottomOfList = useRef<HTMLDivElement>(null);
    const loads = useSelector<TRootState, number>(state => state.posts.loadCounter)
    const dispatch = useDispatch();


    async function load() {
        setLoadingError("");
        setLoading(true);

        try {
            const { data: { data: {after, children} } } = await  axios.get(
                'https://oauth.reddit.com/top.json',
                {
                    headers: {Authorization: `bearer ${token}`},
                    params: {
                        limit: 10,
                        after: nextAfter,
                    }
                }
            );
            setNextAfter(after);
            setPostList(prevChildren => prevChildren.concat(...children));
            dispatch(loadCounter())
        } catch(error) {
            setLoadingError(String(error));
        }

        setLoading(false);
    }

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                load();
            }
        }, {
            rootMargin: "10px",
        });

        if (bottomOfList.current && (loads % 2 !== 0 || loads === 0)) {
            observer.observe(bottomOfList.current);
        }

        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        }
    }, [bottomOfList, nextAfter]);

    const handleClick = () => {
        dispatch(loadToNull());
        load();
    }

    return (
        <Link to={'../posts'}>
            <ul className={styles.cardsList}>
                {postList.length === 0 && !loading && !loadingError && (
                    <div style={{textAlign: "center"}}>Нет ни одного поста</div>
                )}
                {postList.map(post => (
                    <Card
                        key={post.data.id}
                        title={post.data.title}
                        thumbnailSrc={post.data.thumbnail}
                        author={post.data.author}
                        href={post.data.url}
                    />
                ))}

                <div ref={bottomOfList} />

                {loads % 3 === 0 && loads !== 0 && (
                    <button
                        className={styles.showMoreBtn}
                        onClick={handleClick}
                    >
                        Загрузить ещё
                    </button>
                )}

                {loading && (
                    <div style={{textAlign: "center"}}>Загрузка...</div>
                )}
                {loadingError && (
                    <div role={"alert"} style={{textAlign: "center"}}>
                        {loadingError}
                    </div>
                )}

            </ul>
        </Link>
  );
}
