import React from 'react';
import styles from './preview.sass';
import {IPostItem} from "../../CardsList";

export function Preview({thumbnailSrc}: IPostItem) {
  return (
      <div className={styles.preview}>
        <img
            className={styles.previewImg}
            src={thumbnailSrc ? thumbnailSrc : "https://images.unsplash.com/photo-1567521463850-4939134bcd4a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80"}
            alt="preview"
        />
      </div>
  );
}
