import React, {useRef, useEffect} from 'react'
import Slider from '../Slider'
import {Link} from 'react-router-dom';
import Img from '../asset/Img'
import './Home.css'

function Home() {
    
    return (
        <div>
            <Slider/>
            <div className='caja'>
                <div className='title-caja'>
                    <h1>Categoria</h1>
                </div>
                <div className='categoria-caja'>
                    <div className='subcategoria-caja'>
                        <Link to='./fibras'><img loading='lazy' src={Img[7].id}/></Link>
                        <Link to='./fibras'className='sub-link'><h2>Fibras</h2></Link>
                    </div>
                    < div className='subcategoria-caja'>
                        <Link to='./bebidas'><img loading='lazy' src={Img[5].id}/></Link>
                        <Link to='./bebidas'className='sub-link'><h2>Bebidas</h2></Link>
                    </div>
                    <div className='subcategoria-caja'>
                        <Link to='./dulces'><img loading='lazy' src={Img[6].id}/></Link>
                        <Link to='./dulces'className='sub-link'><h2>Dulces</h2></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
