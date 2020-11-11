export const GET_DATA_IMAGES_REQUEST = 'GET_DATA_IMAGES_REQUEST';
export const GET_DATA_IMAGES_SUCCESS = 'GET_DATA_IMAGES_SUCCESS';
export const GET_DATA_IMAGES_FAILURE = 'GET_DATA_IMAGES_FAILURE';

export const SELECT_DATA_IMAGES = 'SELECT_DATA_IMAGES';

/**
 *
 * @param {Object} props
 * @param {String} props.bgImage
 * @param {String} props.iconTrip
 * @param {String} props.logo
 * @param {String} props.imageRocket
 * @param {String} props.title
 * @param {String} props.subtitle
 * @param {String} props.hash
 *
 */
export const selectDataImages = ({ bgImage, iconTrip, logo, imageRocket, title, subtitle, hash }) => ({
    type: SELECT_DATA_IMAGES,
    payload: {
        bgImage,
        iconTrip,
        logo,
        imageRocket,
        title,
        subtitle,
        hash,
    },
});

export const getDataImagesRequest = () => ({
    type: GET_DATA_IMAGES_REQUEST,
});

/**
 *
 * @param {Array} dataImages
 */
export const getDataImagesSuccess = (dataImages) => ({
    type: GET_DATA_IMAGES_SUCCESS,
    payload: { dataImages },
});

/**
 *
 * @param {Error} error
 */
export const getDataImagesFailure = (error) => ({
    type: GET_DATA_IMAGES_FAILURE,
    error: error,
});
