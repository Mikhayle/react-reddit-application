import React from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdownlist.sass';

interface IDropdownProps {
    top?: number | undefined;
    left?: number | undefined;
  children?: React.ReactNode;
  onClick?: () => void;
}

export function DropdownList({top, left, children, onClick}: IDropdownProps) {
  const node = document.getElementById(`modal-root`);
  if(!node) return null;

  return ReactDOM.createPortal((
      <div className={styles.listContainer} style={{top: top, left: left}}>
        <div className={styles.list} onClick={onClick}>
          {children}
        </div>
      </div>
  ), node);
}
