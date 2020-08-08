import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {addToCartAction, removeFromCartAction} from "./redux/cart/actions";
import {increaseStockAction, decreaseStockAction} from "./redux/product/actions";

function App({onAddToCartAction, onRemoveFromCartAction, cart, products}) {
    let productView = [];
    console.log(cart);
    products.forEach(product => {
       productView.push(<div>
           <h3>{product.name}</h3>
           <button onClick={() => {
               add(cart, product)
           }}>Add 1 To Cart</button>
           <button onClick={() => {
               remove(cart, product)
           }}>Remove 1 From Cart</button>
       </div>);
    });

    let add = (cart, product) => {
        onAddToCartAction(cart, product);
    };
    let remove = (cart, product) => {
        onRemoveFromCartAction(cart, product);
    };

    let productInCart = [];
    cart.products.forEach(product => {
        productInCart.push(<h2>{product.id}:{product.qty}</h2>)
    });
    return (
        <div className="App">
            {productView}
            <h1>{cart.qty}</h1>
            {productInCart}
        </div>
    );
}

const mapStateToProps = state => ({
    cart: state.cart,
    products: state.products
});

const mapDispatchToProps = dispatch => ({
    onAddToCartAction: (cart, product) => dispatch(addToCartAction(cart, product)),
    onRemoveFromCartAction: (cart, product) => dispatch(removeFromCartAction(cart, product)),
    onIncreaseStockAction: (product) => dispatch(increaseStockAction(product)),
    onDecreaseStockAction: (product) => dispatch(decreaseStockAction(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
