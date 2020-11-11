import React, { memo, useEffect } from 'react';
import Grid from '../Grid';
import GridItem from '../GridItem';
import StartYourTripButton from '../StartYourTripButton';
import TripDetail from '../TripDetail';
import Navigation from '../Navigation';
import Loading from '../Loading';
import { useSelector } from 'react-redux';
import { selectedDataImageSelector } from '../../selectors/dataImages';
import styles from './root.modules.scss';

const RootComponent = () => {
    const { bgImage, iconTrip, logo, imageRocket, title, subtitle, hash } = useSelector(selectedDataImageSelector);

    return (
        <main className={styles.wrapper}>
            <Grid>
                <img className={styles.logo} src={logo} alt='Visa logo to the moon' />
                <h1 className={styles.title}>{title}</h1>
                <StartYourTripButton />
                <GridItem itemIndex={1} />
                <GridItem itemIndex={2} animation='shake' backgroundImageSrc={bgImage} />
                <GridItem itemIndex={3}>
                    <TripDetail subtitle={subtitle} icon={iconTrip} hashtag={hash} />
                </GridItem>
                <GridItem itemIndex={4} backgroundImageSrc={imageRocket} />
                <GridItem itemIndex={5}>
                    <Loading className={styles.hideInScreenPhone} />
                    <Navigation className={styles.hideInScreenPhone} />
                    <h2 className={`${styles.footerTitle} ${styles.showInScreenPhone}`}>Explore the surface</h2>
                </GridItem>
                <GridItem itemIndex={6} animation='shake' />
            </Grid>
        </main>
    );
};

export default memo(RootComponent);
