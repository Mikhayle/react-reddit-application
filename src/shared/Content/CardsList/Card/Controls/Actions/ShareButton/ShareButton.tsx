import React from 'react';
import styles from './sharebutton.sass';
import {EIcon, Icon} from "../../../../../../Icons/Icon";

export function ShareButton() {
  return (
      <button className={styles.shareButton}>
        <Icon icon={EIcon.share} />
        <span className={styles.title}>Поделиться</span>
      </button>
  );
}
