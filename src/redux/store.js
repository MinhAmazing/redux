import {createStore} from 'redux';
import rootReducer from './rootReducer';

const initState = {
    cart: {
        qty: 0,
        products : []
    },
    products: [
        {
            id: 1,
            name: "product 1",
            stock: 100
        },
        {
            id: 2,
            name: "product 2",
            stock: 100
        },
        {
            id: 3,
            name: "product 3",
            stock: 100
        },
        {
            id: 4,
            name: "product 4",
            stock: 0
        },
        {
            id: 5,
            name: "product 5",
            stock: 100
        }
    ]
};

export default function configureStore(initialState = initState) {
    return createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}
