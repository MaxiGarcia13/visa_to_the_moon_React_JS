import { GET_DATA_IMAGES_REQUEST, getDataImagesSuccess, getDataImagesFailure } from '../actions/dataImages';

export default (store) => (next) => (action) => {
    switch (action.type) {
        case GET_DATA_IMAGES_REQUEST:
            _getDataImagesRequest(action, store.dispatch);
            break;
        default:
            break;
    }

    return next(action);
};

const _getDataImagesRequest = async (_, dispatch) => {
    try {
        const response = await fetch('./data/slider.json', {
            headers: { 'Content-Type': 'application/json', mode: 'no-cors' },
        });

        const { dataImages } = await response.json();

        dispatch(getDataImagesSuccess(dataImages));
    } catch (error) {
        dispatch(getDataImagesFailure(error));
    }
};
