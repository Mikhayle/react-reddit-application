import React from 'react';
import styles from './menu.sass';
import {CardsList} from "../../CardsList";
import {Dropdown} from "../../../../Dropdown";
import {MenuButton} from "./MenuButton";
import {GenericList} from "../../../../GenericList/GenericList";
import {generateId} from "../../../../../utils/react/generateRandomIndex";
import {SaveButton} from "../Controls/Actions/SaveButton";
import {ShareButton} from "../Controls/Actions/ShareButton";
import {CommentsButton} from "../Controls/CommetsButton";
import {HideButton} from "./HideButton";
import {ComplainButton} from "./ComplainButton";

export function Menu() {
    const BREAKPOINT = 1024;
    const LIST = [
        { As: 'li' as const, className: styles.menuItem, node: <CommentsButton /> },
        { As: 'li' as const, className: styles.menuItem, node: <ShareButton /> },
        { As: 'li' as const, className: styles.menuItem, node: <HideButton /> },
        { As: 'li' as const, className: styles.menuItem, node: <SaveButton /> },
        { As: 'li' as const, className: styles.menuItem, node: <ComplainButton /> },
        { As: 'li' as const, className: styles.menuItem, node: "Закрыть" },
    ].map(generateId);

    const MOBILELIST = [
        { As: 'li' as const, className: styles.menuItem, node: <HideButton /> },
        { As: 'li' as const, className: styles.menuItem, node: <ComplainButton /> },
        { As: 'li' as const, className: styles.menuItem, node: "Закрыть" },
    ].map(generateId);

    const [menuList, setMenuList] = React.useState(LIST);
    const changeList = (windowSize: number) => {
        windowSize > BREAKPOINT ? setMenuList(LIST) : setMenuList(MOBILELIST);
    }

    React.useEffect(() => {
        changeList(window.innerWidth);
        window.addEventListener('resize', () => changeList(window.innerWidth));
    }, []);
    React.useEffect(() => {
        window.removeEventListener('resize', () => changeList(window.innerWidth));
    });

  return (
      <div className={styles.menu}>
          <Dropdown
              onOpen={() => console.log('opened')}
              onClose={() => console.log('closed')}
              isOpen={false}
              button={<MenuButton />}
          >
              <ul className={styles.menuList}>
                  <GenericList list={menuList} />
              </ul>
          </Dropdown>
      </div>
  );
}
