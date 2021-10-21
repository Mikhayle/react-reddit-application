import React from "react";
import styles from "*.sass";

interface IItem {
    id: string;
    node: string | React.ReactNode;
    onClick?: (id: string) => void;
    className: string;
    As?: 'a' | 'li' | 'button' | 'div';
    href?: string;
}

interface IGenericListProps {
    list: IItem[];
}

const NOOP = () => {};

export function GenericList({ list }: IGenericListProps) {
    return (
        <>
            {list.map(({ As = 'div', node,  onClick = NOOP, className, id, href}) => (
                <As
                    className={className}
                    onClick={() => onClick(id)}
                    key={id}
                    href={href}
                >
                    {node}
                </As>
            ))}
        </>
    )
}