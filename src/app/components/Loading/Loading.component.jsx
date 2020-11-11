import React, { memo } from 'react';
import ProgressBar from '../../shared/components/ProgressBar';
import styles from './loading.modules.scss';

const LoadingComponent = (className) => {
    return (
        <div className={`${styles.progressBarWrapper} ${className}`}>
            <ProgressBar />
        </div>
    );
};

export default memo(LoadingComponent);
