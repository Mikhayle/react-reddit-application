import React from 'react';
import styles from './karmacounter.sass';
import {ArrowIcon} from "../../../../../Icons/ArrowIcon";

interface IKarmaCounterProps {
    count?: string;
}

export function KarmaCounter({count}: IKarmaCounterProps) {
  return (
      <div className={styles.karmaCounter}>
        <button className={styles.up}>
          <ArrowIcon />
        </button>
        <span className={styles.karmaValue}>
            {count
                ? count: "234"
            }
        </span>
        <button className={styles.down}>
          <ArrowIcon />
        </button>
      </div>
  );
}
