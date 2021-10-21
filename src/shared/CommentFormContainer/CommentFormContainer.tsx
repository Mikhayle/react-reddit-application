import React, { ChangeEvent, FormEvent } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CommentsBlock} from "../Post/CommentsBlock";
import {updateComment} from "../../store/me/action";
import {TRootState} from "../../store/reducer";
import {myComment} from "../../state/mobx_state";
import {observer} from "mobx-react-lite";


export const CommentsFormContainer = observer(() => {
    const inputValue = myComment.inputValue
    const comments = myComment.commentsList;

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        myComment.setCommentValue(event.target.value);
        console.log(inputValue);
    }
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        myComment.addComment({
            userAvatarSrc: "https://cdn.dribbble.com/users/1853242/avatars/small/a3dbb5d1709c75c6cb392cbdcd89b25f.png?1579279296",
            userName: "Михаил Рогов",
            text: inputValue,
            time: new Date().getHours(),
        });

        console.log(comments)
    }

    const handleClickResponse = (userName: string) => {
        myComment.setCommentValue(`${userName ? userName : "Гость"}, `);
    }


    return (
        <CommentsBlock
            value={inputValue}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onReply={handleClickResponse}
        />
    );
});
