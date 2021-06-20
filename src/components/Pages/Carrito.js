import React from 'react';
import { useCart } from 'react-use-cart';

function Carrito() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } =useCart();

    if(isEmpty) return <h1 > Your Cart is empty</h1>

    return(
        <div>
            {console.warn(items)}
        </div>
    );
    
};

export default Carrito