import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import styles from './post.sass';
import {CommentsFormContainer} from "../CommentFormContainer";
import { useHistory } from 'react-router-dom';

export function Post() {
    const postRef = useRef<HTMLDivElement>(null);
    const history = useHistory()

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if(event.target instanceof Node && !postRef.current?.contains(event.target)) {
                history.push('/posts')
            }
        }

       document.addEventListener(`click`, handleClick)

        return () => {
            document.removeEventListener(`click`, handleClick)
        }
    }, []);

  const node = document.querySelector(`#modal-root`);
  if(!node) return null;

  return ReactDOM.createPortal((
      <div className={styles.modal} ref={postRef}>
          <h2>
              Следует отметить, что новая модель организационный деятельности поможет
          </h2>
          <div className={styles.content}>
              <p>
                  Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как
                  квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по
                  отраслям.Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует
                  необходимость кластеризации усилий.Но сторонники тоталитаризма в науке и по сей день остаются
                  уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит
                  несомненную пользу обществу.
              </p>
          </div>
          <CommentsFormContainer />
      </div>
      ), node
  );
}
