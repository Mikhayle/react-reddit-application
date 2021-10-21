import React from 'react';
import styles from './actions.sass';
import {ShareButton} from "./ShareButton/ShareButton";
import {SaveButton} from "./SaveButton/SaveButton";

export function Actions() {
  return (
    <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
  );
}
