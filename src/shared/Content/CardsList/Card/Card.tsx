import React from 'react';
import styles from './card.sass';
import {TextContent} from "./TextContent/TextContent";
import {Preview} from "./Preview/Preview";
import {Menu} from "./Menu/Menu";
import {Controls} from "./Controls/Controls";
import {IPostItem} from "../CardsList";


export function Card({ title, thumbnailSrc, author, href}: IPostItem) {
  return (
    <li className={styles.card}>
        <TextContent title={title} href={href} author={author} />
        <Preview thumbnailSrc={thumbnailSrc} />
        <Menu />
        <Controls />
    </li>
  );
}
