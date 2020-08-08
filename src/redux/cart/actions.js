import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from './constants'

import {
    INCREASE_STOCK,
    DECREASE_STOCK
} from "../product/constants";

export const addToCartAction = (cart, product) => {
    return {
        type: ADD_TO_CART,
        cart: cart,
        product: product
    }
};

export const removeFromCartAction = (cart, product) => {
    return {
        type: REMOVE_FROM_CART,
        cart: cart,
        product: product
    }
};

