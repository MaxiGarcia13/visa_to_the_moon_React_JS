import React, { memo } from 'react';
import styles from './grid.modules.scss';

const GridComponent = ({ children }) => <div className={styles.grid}>{children}</div>;

export default memo(GridComponent);
