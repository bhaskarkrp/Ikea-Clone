import React from 'react'
import styles from "./Readmore.module.css";

export const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = React.useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className={styles.text}>
            {isReadMore ? text.slice(0, 0) : text}
            <span onClick={toggleReadMore} className={styles.read_or_hide}>
                {isReadMore ? "...read more" : " show less"}
            </span>
        </p>
    );
};