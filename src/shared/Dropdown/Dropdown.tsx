import React, {useRef, useState} from 'react';
import styles from './dropdown.sass';
import {DropdownList} from "./DropdownList";


interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?  : () => void;
}

const NOOP = () => {};

export function Dropdown( { button, children, isOpen, onClose = NOOP, onOpen = NOOP }: IDropdownProps ) {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
    React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
    React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

    const [coords, setCoords] = useState({x: 0, y: 0});

    const ref = useRef<HTMLDivElement>(null);

    const handleOpen = () => {
        if (onOpen !== undefined) {
            const coordsElem = ref.current!.getBoundingClientRect();
            const offsetY = window.pageYOffset;

            if (coords === null) return null;
            setIsDropdownOpen(!isDropdownOpen);
            setCoords({
                x: coordsElem.left + coordsElem.width,
                y: coordsElem.bottom + offsetY
            })
        }
    }

  return (
      <div className={styles.container} ref={ref}>
        <div onClick={handleOpen}>
          {button}
        </div>
        {isDropdownOpen && (
           <DropdownList
            top={coords?.y}
            left={coords?.x}
            children={children}
            onClick={handleOpen}
           />
        )}
      </div>
);
}
