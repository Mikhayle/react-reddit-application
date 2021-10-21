import React from "react";
import {MenuIcon} from "./MenuIcon";
import {WarningIcon} from "./WarningIcon";
import {HideIcon} from "./HideIcon";
import {SaveIcon} from "./SaveIcon";
import {ShareIcon} from "./ShareIcon";
import {CommentsIcon} from "./CommentsIcon";
import styles from "./style.sass";

export enum EIcon {
    menu = "menu",
    hide = "hide",
    complain = "complain",
    save ="save",
    share= "share",
    comments = "comments"
}

const iconMap = new Map()
    .set(EIcon.complain, WarningIcon)
    .set(EIcon.menu, MenuIcon)
    .set(EIcon.hide, HideIcon)
    .set(EIcon.save, SaveIcon)
    .set(EIcon.share, ShareIcon)
    .set(EIcon.comments, CommentsIcon);


interface IIconsProps {
    icon: string;
    size?: string;
}

export interface IIconProps {
    size?: string
}

export function Icon<T extends React.ReactElement>({ icon, size = '23px' }: IIconsProps) {
    const Component = iconMap.get(icon);

    return (
       <>
           <span style={{width: size}} className={styles.iconWrapper}>
           <Component size={size} />
           </span>
       </>
    )
}