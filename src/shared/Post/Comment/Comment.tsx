import React, {MutableRefObject, useCallback} from 'react';
import styles from './comment.sass';
import {CommentsIcon, IconAnon, ShareIcon} from "../../Icons";
import {WarningIcon} from "../../Icons/WarningIcon";
import {ArrowIcon} from "../../Icons/ArrowIcon";
import {computeTime} from "../../../utils/js/houresPrefix";

export interface ICommentProps {
  id?: string
  onReply?: (e?: string | undefined) => void;
  textareaRef?: MutableRefObject<null | HTMLDivElement>;
  children?: React.ReactNode;
  userName?: string;
  userAvatarSrc?: string;
  time?: number | undefined;
  heading?: string;
  text?: string;
}

export function Comment({onReply, textareaRef, children, userName, userAvatarSrc, time, heading, text}: ICommentProps) {

  const handleClick = useCallback(() => {
    textareaRef?.current?.focus();
    if (onReply) {
      onReply(userName);
    }
  }, [onReply])

  return (
    <li className={styles.commentWrapper}>
      <div className={styles.commentSidebar}>
        <button className={styles.btnUp}>
          <ArrowIcon />
        </button>
        <button className={styles.btnDown}>
          <ArrowIcon />
        </button>
        <div className={styles.line}>
        </div>
      </div>
      <div className={styles.comment}>
        <div className={styles.metaData}>
          <div className={styles.avatar}>
            {userAvatarSrc
              ? <img
                    src={userAvatarSrc}
                    alt={userName ? userName :  'Гость'}
                />
                : <IconAnon />
            }
          </div>
          <span className={styles.name}>
          {userName ? userName : 'Гость'}
        </span>
          <span className={styles.time}>
          {`${computeTime(time)} назад`}
        </span>
          <span className={styles.heading}>
          {heading ?
            heading :
              `Новичек`
          }
        </span>
        </div>
        <div className={styles.text}>
          {text
            ? text
              : "Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно."
          }
        </div>
        <div className={styles.controls}>
          <button
              className={styles.controlsBtn}
              onClick={handleClick}
          >
            <CommentsIcon />
            <span>Ответить</span>
          </button>
          <button className={styles.controlsBtn}>
            <ShareIcon />
            <span>
              Поделиться
            </span>
          </button>
          <button className={styles.controlsBtn}>
            <WarningIcon />
            <span>
              Пожаловаться
            </span>
          </button>
        </div>
        <ul className={styles.commentResponse}>
          { children }
        </ul>
      </div>
    </li>
  );
}
