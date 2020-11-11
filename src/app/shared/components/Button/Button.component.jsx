import React, { memo } from 'react';
import styles from './button.modules.scss';

const typeButtons = {
    primary: 'primary',
};

/**
 *
 * @param {Object} props
 * @param { 'primary' | undefined } props.type
 */

const ButtonComponent = ({ children, type = 'primary' }) => (
    <button className={`${styles.btn} ${styles[typeButtons[type]]}`}>{children}</button>
);

export default memo(ButtonComponent);
