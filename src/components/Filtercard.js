import React from 'react';


const Filtercard = (props)=>{
    return(
        <div className="container">
            <div key={props.N} className="image-card">
                <a href='#'>
                    <img loading='lazy' className="image" src={props.id} alt={props.title}/>
                </a>
                <div className='card-botton'>
                    <div className='description'>
                        <p>{props.title}</p>
                        <p>S/.{props.price}</p>
                    </div>
                    <div className='btn-shop'>
                        <button><i class="fas fa-shopping-bag"/> Comprar Ahora</button>
                    </div>
                </div>       
            </div>
        </div>
    );
};

export default Filtercard;
