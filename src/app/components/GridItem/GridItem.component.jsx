import React, { memo, useMemo } from 'react';
import styles from './gridItem.modules.scss';
import { indexClass, indexAnimationClass } from './helper';

/**
 *
 * @param {Object} props
 * @param { 1 | 2 | 3 | 4 | 5 | 6 } props.itemIndex
 * @param { 'shake' } props.animation
 * @param { String } props.backgroundImageSrc
 */

const GridItemComponent = ({ itemIndex, animation, children, backgroundImageSrc }) => {
    const styleInline = useMemo(() => {
        if (typeof backgroundImageSrc === 'string') {
            return {
                backgroundImage: `url(${backgroundImageSrc})`,
            };
        }

        return {};
    }, [backgroundImageSrc]);

    return (
        <div
            style={styleInline}
            className={`
                ${styles[indexClass[itemIndex]]}
                ${styles[indexAnimationClass[animation]]}
            `}
        >
            {children}
        </div>
    );
};

export default memo(GridItemComponent);
