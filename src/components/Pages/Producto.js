import React from 'react'
import './Producto.css'
import {Link} from 'react-router-dom';
import Cookies from '../asset/Cookies';
import Drink from '../asset/Drink';
import Fiber from '../asset/Fiber';


function Producto() {
    return (
        <div className="producto">
            <div className='caja-producto'>
                <div className='title-produc'><h1>Productos</h1></div>
                <div className='tipo-producto'>
                    <div className='tipos'>
                        <Link to='./bebidas' loading='lazy' className='tipos-img'><img src={Drink[5].id}/></Link>
                        <Link to='./bebidas'className='tipos-p'><p>Cerveza</p></Link>
                    </div>
                    <div className='tipos'>
                        <Link to='./bebidas'loading='lazy' className='tipos-img'><img src={Drink[9].id}/></Link>
                        <Link to='./bebidas'className='tipos-p'><p>Leche de Almendra</p></Link>
                    </div>
                    <div className='tipos'>
                        <Link to='./bebidas'loading='lazy' className='tipos-img'><img src={Drink[13].id}/></Link>
                        <Link to='./bebidas'className='tipos-p'><p>Infuciones</p></Link>
                    </div>
                    <div className='tipos'>
                        <Link to='./dulces'loading='lazy' className='tipos-img'><img src={Cookies[7].id}/></Link>
                        <Link to='./dulces'className='tipos-p'><p>Miel</p></Link>
                    </div>
                    <div className='tipos'>
                        <Link to='./bebidas'loading='lazy' className='tipos-img'><img src={Drink[18].id}/></Link>
                        <Link to='./bebidas'className='tipos-p'><p>Yogurt</p></Link>
                    </div>
                    <div className='tipos'>
                        <Link to='./bebidas'loading='lazy' className='tipos-img'><img src={Drink[0].id}/></Link>
                        <Link to='./bebidas'className='tipos-p'><p>Cafe</p></Link>
                    </div>
                    <div className='tipos'>
                        <Link  to='./fibras'loading='lazy' className='tipos-img'><img src={Fiber[0].id}/></Link>
                        <Link to='./fibras'className='tipos-p'><p>Cereal</p></Link>
                    </div>
                    <div className='tipos'>
                        <Link  to='./fibras'loading='lazy' className='tipos-img'><img src={Fiber[4].id}/></Link>
                        <Link to='./fibras'className='tipos-p'><p>Fideos</p></Link>
                    </div>
                    <div className='tipos'>
                        <Link  to='./fibras'loading='lazy' className='tipos-img'><img src={Fiber[6].id}/></Link>
                        <Link to='./fibras'className='tipos-p'><p>Harina</p></Link>
                    </div>
                    <div className='tipos'>
                        <Link to='./dulces'loading='lazy' className='tipos-img'><img src={Cookies[0].id}/></Link>
                        <Link to='./dulces'className='tipos-p'><p>Chocolate</p></Link>
                    </div>
                    <div className='tipos'>
                        <Link to='./dulces'loading='lazy' className='tipos-img'><img src={Cookies[2].id}/></Link>
                        <Link to='./dulces'className='tipos-p'><p>Galletas</p></Link>
                    </div>
                    <div className='tipos'>
                        <Link to='./fibras'className='tipos-img'><img src={Fiber[7].id}/></Link>
                        <Link to='./fibras'className='tipos-p'><p>Panes</p></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Producto
