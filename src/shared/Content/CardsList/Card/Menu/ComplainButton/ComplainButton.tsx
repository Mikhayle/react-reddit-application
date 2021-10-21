import React from 'react';
import styles from './complainbutton.sass';
import {EIcon, Icon} from "../../../../../Icons/Icon";

export function ComplainButton() {
  return (
      <button className={styles.complainButton}>
        <Icon icon={EIcon.complain} />
        <span>Пожаловаться</span>
      </button>
  );
}
