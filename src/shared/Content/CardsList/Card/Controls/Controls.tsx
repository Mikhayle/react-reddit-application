import React from 'react';
import styles from './controls.sass';
import {KarmaCounter} from "./KarmaCounter/KarmaCounter";
import {CommentsButton} from "./CommetsButton/CommentsButton";
import {Actions} from "./Actions/Actions";

export function Controls() {
  return (
      <div className={styles.controls}>
        <KarmaCounter />
        <CommentsButton />
        <Actions />
      </div>
  );
}
