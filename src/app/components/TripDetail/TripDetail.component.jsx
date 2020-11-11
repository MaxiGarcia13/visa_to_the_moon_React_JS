import React, { memo } from 'react';
import styles from './tripDetail.modules.scss';

/**
 *
 * @param {Object} props
 * @param {String} props.subtitle
 * @param {String} props.icon
 * @param {String} props.hashtag
 */

const TripDetailComponent = ({ icon, subtitle, hashtag }) => (
    <div className={styles.wrapper}>
        <img className={styles.icon} src={icon} alt='Icono de nave espacial despegando' />
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <div className={styles.line}></div>
        <p className={styles.hashtag}>{hashtag}</p>
    </div>
);

export default memo(TripDetailComponent);
