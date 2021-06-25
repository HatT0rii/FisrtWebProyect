import React from 'react';
import { useCart } from 'react-use-cart';
import {Link} from 'react-router-dom';
import '../Shopping.css'

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

    // Cuando esta vacio el carrito

    if(isEmpty) return(
        <div className='Shop-empty'>
            <div className='Shopem'>
                <i class="fas fa-shopping-cart Shopcart"/>
                <h1>!Tu carrito esta vacio¡</h1>
                <p>Actualmente no tienes ningun producto a tu carrito de compras. Visita nuestra pagina web y encuentra todos los productos que tenemos para ti.</p>
                <Link to='./producto'><button>Ver Productos</button></Link>
            </div>
        </div>
        );

    // Cuando esta lleno

    return(
        <div className='shop-full'>
            <div className='shoptitu'>
                <h1>Carrito de Compras</h1>
                <h4>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h4>
            </div>
            <div className='shopping'>
                {items.map(item=>{
                    return(
                        <div className='shop-detalle'>
                            <div className='shop-deta1' key={item.id}>
                                <div className='shop-deta1a'>
                                    <img loading='lazy' className="Cart-img" src={item.img} alt={item.title}/>
                                    <p>{item.title}</p>
                                    <p>S/. {item.price}</p>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}><i class="fas fa-minus"/></button>
                                    {item.quantity}
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}><i class="fas fa-plus"/></button>
                                </div>
                                <div className='shop-deta1b'>
                                    <button onClick={() => removeItem(item.id)}>Remove Item</button>
                                </div>
                            </div>
                                <div className='shop-deta2' key={item.id}>
                                <div><h2>Resumen de la Compra</h2></div>
                                <div>
                                    <p>Sub-total:</p><p> S/.{cartTotal}</p>
                                </div>
                                <div>
                                    <p>Total:</p><p> S/.{cartTotal}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='shop-final'>
                <Link to='#'><button>Continuar con el Pago</button></Link>
                <Link to='./producto'><button>Ver mas Productos</button></Link>
            </div>
        </div>
    );
    
};

export default Carrito