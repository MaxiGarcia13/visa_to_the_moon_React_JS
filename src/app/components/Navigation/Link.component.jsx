import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import styles from './navigation.modules.scss';
import { useRouteMatch } from 'react-router-dom';

/**
 *
 * @param {Object} props
 * @param {String} props.path
 */

const LinkComponent = ({ path, children }) => {
    let match = useRouteMatch(path);

    const linkClass = useMemo(() => {
        let _class = styles.item;

        if (match && match.isExact) {
            _class = `${_class} ${styles.active}`;
        }

        return _class;
    }, [match]);

    return (
        <Link to={path} className={linkClass}>
            {children}
        </Link>
    );
};

export default memo(LinkComponent);
