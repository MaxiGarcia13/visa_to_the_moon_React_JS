import React, { memo } from 'react';
import Link from './Link.component';
import styles from './navigation.modules.scss';
import { prevRoutes, viewEasyRoutes, nextRoutes } from '../../routes';

const NavigationComponent = ({ className }) => (
    <nav className={`${styles.wrapper} ${className}`}>
        <Link path={prevRoutes}> prev </Link>
        <Link path={viewEasyRoutes}>view ease</Link>
        <Link path={nextRoutes}> next </Link>
    </nav>
);

export default memo(NavigationComponent);
