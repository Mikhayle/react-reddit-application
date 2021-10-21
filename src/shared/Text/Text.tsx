import React from 'react';
import styles from './text.sass';
import classNames from "classnames";

export enum EColors {
  black = "black",
  orange = "orange",
  green = "green",
  white = "white",
  greyF4 = "greyF4",
  greyF3 = "greyF3",
  greyD9 = "greyD9",
  greyC4 = "greyF3",
  grey99 = "grey99",
  grey66 = "grey66",

}

type TSize = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps  {
  As?: "span" | "h1" | "h2" | "h3" | "h4" | "p" | "div";
  children?: React.ReactNode;
  size: TSize;
  bold?: boolean
  mobileSize?: TSize;
  tabletSize?: TSize;
  desktopSize?: TSize;
  color: EColors;

}

export function Text(props: ITextProps) {
  const {
    As = "span",
    children,
    size,
    bold = false,
    mobileSize,
    tabletSize,
    desktopSize,
    color = EColors.black
  } = props;

  const classes = classNames(
      styles[`s${size}`],
      { [styles.bold]: bold },
      { [styles[`m${mobileSize}`]]: mobileSize },
      { [styles[`t${tabletSize}`]]: tabletSize },
      { [styles[`d${desktopSize}`]]: desktopSize },
      styles[color]
  );
  return (
      <As className={classes}>
        {children}
      </As>
  );
}
