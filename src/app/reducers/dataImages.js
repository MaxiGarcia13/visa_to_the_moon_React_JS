import {
    SELECT_DATA_IMAGES,
    GET_DATA_IMAGES_REQUEST,
    GET_DATA_IMAGES_SUCCESS,
    GET_DATA_IMAGES_FAILURE,
} from '../actions/dataImages';

const initialState = {
    dataImages: [],
    selected: {
        bgImage: 'assets/images/background.jpg',
        iconTrip: 'assets/images/icon_rocket.png',
        logo: 'assets/images/logo.png',
        imageRocket: 'assets/images/rocket.png',
        title: 'Visa to the Moon',
        subtitle: 'Your trip start here',
        hash: '#moontrip #visamoon #moontickets',
    },
    fetching: false,
    error: null,
    timestamp: null,
};

export default (store = initialState, action) => {
    switch (action.type) {
        case GET_DATA_IMAGES_REQUEST: {
            return {
                ...store,
                fetching: true,
                error: false,
            };
        }
        case GET_DATA_IMAGES_SUCCESS: {
            return {
                ...store,
                fetching: false,
                dataImages: [...action.payload.dataImages],
            };
        }
        case GET_DATA_IMAGES_FAILURE: {
            return {
                ...store,
                error: action.error,
            };
        }
        case SELECT_DATA_IMAGES:
            return {
                ...store,
                selected: {
                    ...store.data,
                    bgImage: action.payload.bgImage,
                    iconTrip: action.payload.iconTrip,
                    logo: action.payload.logo,
                    imageRocket: action.payload.imageRocket,
                    title: action.payload.title,
                    subtitle: action.payload.subtitle,
                    hash: action.payload.hash,
                },
            };

        default:
            return store;
    }
};
