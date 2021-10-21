import React, {useContext, useState} from 'react';
import styles from './textcontent.sass';
import {IPostItem} from "../../CardsList";
import {Link} from "react-router-dom";

export function TextContent({title, author, href}: IPostItem) {
    return (
        <div className={styles.textContent}>
          <div className={styles.metaData}>
            <div className={styles.userLink}>
              <img
                  className={styles.avatar}
                  src="https://cdn.dribbble.com/users/1853242/avatars/small/a3dbb5d1709c75c6cb392cbdcd89b25f.png?1579279296"
                  alt="avatar"
              />
              <a href="#user-url" className={styles.username}>{author ? author : <span>Дмитрий Гришин</span>}</a>
            </div>
            <span className={styles.createdAt}>
                <span className={styles.publishedLabel}>опубликовано&nbsp;</span>
                 4 часа назад
            </span>
          </div>
          <h2 className={styles.title}>
            <Link
                to={"/posts/1"}
                className={styles.postLink}
            >
                {title
                    ? title
                    : (<>Следует отметить, что новая модель организационнойСледует отметить, что новая модель организационной...</>)}
            </Link>
          </h2>
        </div>
    );
}
