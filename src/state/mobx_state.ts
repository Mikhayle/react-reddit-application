import {makeAutoObservable} from "mobx";
import { v4 as uuid } from "uuid";
import {ICommentProps} from "../shared/Post/Comment";

class CommentBlockState {
    inputValue: string = "Привет из MobX";
    commentsList: ICommentProps[] = [
        {
            id: uuid(),
            time: 14
        }
    ];

    constructor() {
        makeAutoObservable(this)
    }

    setCommentValue(newValue: string) {
        this.inputValue = newValue;
    }

    addComment({userName, text, userAvatarSrc, heading, time}: ICommentProps) {
        this.commentsList = [
            ...this.commentsList,
            {
                id: uuid(),
                userName,
                text,
                userAvatarSrc,
                heading,
                time,
            }
        ]
    }
}

export const myComment = new CommentBlockState();
