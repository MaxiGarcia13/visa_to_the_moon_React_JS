import React, { memo } from 'react';
import Button from '../../shared/components/Button';
import styles from './startYourTripButton.modules.scss';

const StartYourTripButtonComponent = () => (
    <div className={styles.wrapper}>
        <Button>{`Start your trip >`}</Button>
    </div>
);

export default memo(StartYourTripButtonComponent);
