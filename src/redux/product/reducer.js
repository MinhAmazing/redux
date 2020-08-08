import {
    INCREASE_STOCK,
    DECREASE_STOCK
} from "./constants";

const initState = {};

export default (state = initState, action) => {
    switch (action.type) {
        case INCREASE_STOCK:
        case DECREASE_STOCK: {
            return {
                data: action.stock
            }
        }
            break;
        default:
            return state;
            break;
    }
}