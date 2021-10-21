import React from 'react';
import styles from './savebutton.sass';
import {EIcon, Icon} from "../../../../../../Icons/Icon";

export function SaveButton() {
  return (
      <button className={styles.saveButton}>
          <Icon icon={EIcon.save} size={'10'} />
          <span className={styles.title}>Сохранить</span>
      </button>
  );
}
