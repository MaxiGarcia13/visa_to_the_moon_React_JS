import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataImagesRequest, selectDataImages } from '../../actions/dataImages';
import { dataImageSelector } from '../../selectors/dataImages';
import { useLocation } from 'react-router-dom';
import { prevRoutes, viewEasyRoutes, nextRoutes } from '../../routes';

const indexRoutes = {
    [prevRoutes]: 0,
    [viewEasyRoutes]: 1,
    [nextRoutes]: 1,
};

const DataLoaderComponent = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const dataImages = useSelector(dataImageSelector);

    useEffect(() => {
        dispatch(getDataImagesRequest());
    }, []);

    useEffect(() => {
        if (dataImages.length) {
            dispatch(selectDataImages(dataImages[indexRoutes[location.pathname] || 0]));
        }
    }, [location, dataImages]);

    return null;
};

export default memo(DataLoaderComponent);
