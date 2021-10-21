import React from 'react';
import styles from './menubutton.sass';
import {MenuIcon} from "../../../../../Icons/MenuIcon";
import {EIcon, Icon} from "../../../../../Icons/Icon";

export function MenuButton() {
  return (
      <button className={styles.menuButton}>
          <Icon icon={EIcon.menu} />
      </button>
  );
}
