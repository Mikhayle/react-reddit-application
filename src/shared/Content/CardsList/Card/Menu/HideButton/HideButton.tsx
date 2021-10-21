import React from 'react';
import styles from './hidebutton.sass';
import {EIcon, Icon} from "../../../../../Icons/Icon";

export function HideButton() {
  return (
      <button className={styles.hideButton}>
        <Icon icon={EIcon.hide} />
        <span>Скрыть</span>
      </button>
  );
}
