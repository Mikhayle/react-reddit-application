import React from 'react';
import styles from './commentsbutton.sass';
import {EIcon, Icon} from "../../../../../Icons/Icon";

export function CommentsButton() {
  return (
      <button className={styles.commentsButton}>
        <Icon icon={EIcon.comments} />
        <span className={styles.commentsNumber}>13</span>
        <span className={styles.commentsTitle}>Комментарии</span>
      </button>
  );
}
