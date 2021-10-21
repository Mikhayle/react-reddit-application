import React from 'react';
import styles from './commentbutton.sass';

export function CommentButton() {
  return (
      <button type="submit" className={styles.commentButton}>
        Комментировать
      </button>
  );
}
