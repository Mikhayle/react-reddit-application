import React, {ChangeEvent, FormEvent, useRef, useState} from 'react';
import styles from './commentsblock.sass';
import {generateId} from "../../../utils/react/generateRandomIndex";
import {GenericList} from "../../GenericList/GenericList";
import {CommentButton} from "../CommentButton";
import {CodeTools} from "../../Icons/CodeTools";
import {PasteImageTools} from "../../Icons/PasteImageTools";
import {CopyTools} from "../../Icons/CopyTools";
import {DownloadTools} from "../../Icons/DownloadTools";
import {EmojiTools} from "../../Icons/EmojiTools";
import {RefreshTools} from "../../Icons/RefreshTools";
import {LinkTools} from "../../Icons/LinkTools";
import {SpeechTools} from "../../Icons/SpeechTools";
import {NotesTools} from "../../Icons/NotesTools";
import {EditTools} from "../../Icons/EditTools";
import {FormatTools} from "../../Icons/FormatTools";
import {InsertPdfTools} from "../../Icons/InsertPdfTools";
import {Comment} from "../Comment";
import {Formik} from "formik";
import {myComment} from "../../../state/mobx_state";
import {computeTime} from "../../../utils/js/houresPrefix";


interface ICommentBlockProps {
    name?: string | undefined;
    value?: string;
    onReply?: (e?: string) => void;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit?: (event: FormEvent) => void;
}

export function CommentsBlock({ value, onReply, onChange, onSubmit }: ICommentBlockProps) {

const textareaRef = useRef(null);

  const TOOLS_LIST = [
    { As: 'li' as const, className: styles.toolsItem, node: <CodeTools /> },
    { As: 'li' as const, className: styles.toolsItem, node: <PasteImageTools /> },
    { As: 'li' as const, className: styles.toolsItem, node: <CopyTools /> },
    { As: 'li' as const, className: styles.toolsItem, node: <DownloadTools /> },
    { As: 'li' as const, className: styles.toolsItem, node: <EmojiTools /> },
    { As: 'li' as const, className: styles.toolsItem, node: <RefreshTools /> },
    { As: 'li' as const, className: styles.toolsItem, node: <LinkTools /> },
    { As: 'li' as const, className: styles.toolsItem, node: <SpeechTools /> },
    { As: 'li' as const, className: styles.toolsItem, node: <NotesTools /> },
    { As: 'li' as const, className: styles.toolsItem, node: <EditTools /> },
    { As: 'li' as const, className: styles.toolsItem, node: <FormatTools /> },
    { As: 'li' as const, className: styles.toolsItem, node: <InsertPdfTools /> },
  ].map(generateId);

  const [tools, setTools] = useState(TOOLS_LIST);
  const commentList = myComment.commentsList;

  return (
    <div className={styles.commentsBlock}>
        <Formik
            initialValues={
                {comment: ''}
            }
            validateOnBlur
            onSubmit={() => {onSubmit}
        }
        >
            {( {
                   errors,
                   touched,
                   handleBlur
            } ) => (
                <form onSubmit={onSubmit}>
                    <textarea
                        ref={textareaRef}
                        className={styles.commentInput}
                        id="CommentsText"
                        value={value}
                        onChange={onChange}
                        onBlur={handleBlur}
                        name={'comment'}
                    />
                    { touched.comment && errors.comment
                    && <p>
                        {errors.comment}
                    </p>
                    }
                    <div className={styles.commentControls}>
                        <div className={styles.toolsBlock}>
                            <ul className={styles.toolsList}>
                                <GenericList list={tools} />
                            </ul>
                        </div>
                        <CommentButton />
                    </div>
                </form>
            )}
        </Formik>

        <hr className={styles.break} />

        <ul className="styles.commentList">
            {
                commentList.map(({id, userName, userAvatarSrc, time, heading, text, textareaRef}) => {
                   return (
                       <Comment
                           key={id}
                           onReply={onReply}
                           textareaRef={textareaRef}
                           userName={userName}
                           userAvatarSrc={userAvatarSrc}
                           text={text}
                           heading={heading}
                           time={time}
                       >
                       </Comment>
                   )
                })
            }
        </ul>

        {/*<ul className={styles.commentsList}>*/}
        {/*    <Comment*/}
        {/*        onReply={onReply}*/}
        {/*        textareaRef={textareaRef}*/}
        {/*        userName={"Михаил Рогов"}*/}
        {/*        userAvatarSrc={"https://cdn.dribbble.com/users/1853242/avatars/small/a3dbb5d1709c75c6cb392cbdcd89b25f.png?1579279296"}*/}
        {/*        time={"1 час"}*/}
        {/*        heading={"Лига юристов"}*/}
        {/*        text={"Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно. "}*/}
        {/*    >*/}
        {/*        <Comment*/}
        {/*            onReply={onReply}*/}
        {/*            textareaRef={textareaRef}*/}
        {/*            userName={"Вика Салмина"}*/}
        {/*            time={"1 час"}*/}
        {/*            heading={'Лига юристов'}*/}
        {/*            text={"Принимая во внимание показатели успешности, разбавленное изрядной долей эмпатии, рациональное мышление прекрасно подходит для реализации анализа существующих паттернов поведения. Равным образом, убеждённость некоторых оппонентов, в своём классическом представлении."}*/}
        {/*        >*/}
        {/*            <Comment*/}
        {/*                onReply={onReply}*/}
        {/*                textareaRef={textareaRef}*/}
        {/*                userName={"Зураб Желев"}*/}
        {/*                time={"2 часа"}*/}
        {/*                heading={'Лига юристов'}*/}
        {/*                text={"А также диаграммы связей неоднозначны и будут функционально разнесены на независимые элементы. Следует отметить, что начало повседневной работы по формированию позиции однозначно определяет каждого участника как способного принимать собственные решения."}*/}
        {/*            >*/}

        {/*            </Comment>*/}
        {/*        </Comment>*/}
        {/*    </Comment>*/}
        {/*    <Comment*/}
        {/*        onReply={onReply}*/}
        {/*        textareaRef={textareaRef}*/}
        {/*        userName={"Алексей Киняев"}*/}
        {/*        userAvatarSrc={"https://cdn.dribbble.com/users/1853242/avatars/small/a3dbb5d1709c75c6cb392cbdcd89b25f.png?1579279296"}*/}
        {/*        time={"2 часа"}*/}
        {/*        heading={"Лига экономистов"}*/}
        {/*        text={"Безусловно, повышение уровня гражданского сознания однозначно фиксирует необходимость стандартных."}*/}
        {/*    >*/}

        {/*    </Comment>*/}
        {/*    <Comment*/}
        {/*        onReply={onReply}*/}
        {/*        textareaRef={textareaRef}*/}
        {/*        userName={"Дмитрий Фёдоров"}*/}
        {/*        userAvatarSrc={"https://cdn.dribbble.com/users/1853242/avatars/small/a3dbb5d1709c75c6cb392cbdcd89b25f.png?1579279296"}*/}
        {/*        time={"2 часа"}*/}
        {/*        heading={"Лига консультантов"}*/}
        {/*        text={"Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно. "}*/}
        {/*    >*/}

        {/*    </Comment>*/}
        {/*    <Comment*/}
        {/*        onReply={onReply}*/}
        {/*        textareaRef={textareaRef}*/}
        {/*        userName={"Игорь Полищук"}*/}
        {/*        userAvatarSrc={"https://cdn.dribbble.com/users/1853242/avatars/small/a3dbb5d1709c75c6cb392cbdcd89b25f.png?1579279296"}*/}
        {/*        time={"4 часа"}*/}
        {/*        heading={"Лига кадровиков"}*/}
        {/*        text={"Но активно развивающиеся страны третьего мира своевременно верифицированы. В целом, конечно."}*/}
        {/*    >*/}
        {/*        <Comment*/}
        {/*            onReply={onReply}*/}
        {/*            textareaRef={textareaRef}*/}
        {/*            userName={"Денис Беликов"}*/}
        {/*            userAvatarSrc={"https://cdn.dribbble.com/users/1853242/avatars/small/a3dbb5d1709c75c6cb392cbdcd89b25f.png?1579279296"}*/}
        {/*            time={"3 часа"}*/}
        {/*            heading={"Лига бухгалтеров"}*/}
        {/*            text={"Новая модель организационной деятельности представляет собой интересный эксперимент проверки форм воздействия. Вот вам яркий пример современных тенденций - перспективное планирование способствует повышению качества кластеризации усилий. Внезапно, некоторые особенности внутренней политики."}*/}
        {/*        >*/}
        {/*        </Comment>*/}
        {/*    </Comment>*/}
        {/*</ul>*/}

    </div>
  );
}
