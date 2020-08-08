import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from './constants'

const initState = {};

export default (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            let product = action.product;
            let cart = action.cart;
            if (product.stock > 0) {
                if (cart.products.length != 0) {
                    let inCart = false;
                    if (cart.products.filter(function (value, key) {
                        if (value.id === product.id) {
                            cart.products[key].qty = cart.products[key].qty + 1;
                            inCart = true;
                        }
                    })) ;
                    if (inCart) {
                        return {
                            qty: cart.qty + 1,
                            products: cart.products
                        }
                    } else {
                        let productToCart = {
                            id: product.id,
                            qty: 1
                        };

                        cart.products.push(productToCart)

                        return {
                            qty: cart.qty + 1,
                            products: cart.products
                        }
                    }
                } else {
                    let productToCart = {
                        id: product.id,
                        qty: 1
                    };

                    cart.products.push(productToCart);

                    return {
                        qty: cart.qty + 1,
                        products: cart.products
                    }
                }
            } else {
                return {
                    qty: cart.qty,
                    products: cart.products
                }
            }
        }
            break;
        case REMOVE_FROM_CART: {
            let product = action.product;
            let cart = action.cart;
            if (cart.products.length != 0) {
                let inCart = false;
                cart.products.filter(function (value, key) {
                    if (value.id === product.id) {
                        if (cart.products[key].qty >= 1) {
                            cart.products[key].qty = cart.products[key].qty - 1;
                            inCart = true;
                        }
                    }
                }) ;
                if (inCart) {
                    let productInCart = cart.products.filter(function (value) {
                        return value.qty > 0;
                    });
                    return {
                        qty: cart.qty - 1,
                        products: productInCart
                    }
                } else {
                    return {
                        qty: cart.qty,
                        products: cart.products
                    }
                }
            } else {
                return {
                    qty: cart.qty,
                    products: cart.products
                }
            }
        }
            break;
        default:
            return state;
            break;
    }
}

