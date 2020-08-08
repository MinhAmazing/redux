import {INCREASE_STOCK, DECREASE_STOCK} from "./constants";

export const increaseStockAction = (qty) => {
    return {
        type: INCREASE_STOCK,
        qty: qty + 1
    }
};

export const decreaseStockAction = (qty) => {
    return {
        type: DECREASE_STOCK,
        qty: qty - 1
    }
}