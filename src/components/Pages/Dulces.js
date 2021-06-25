import React,{useEffect, useState} from 'react'
import Cookies from '../asset/Cookies';
import '../Filter.css'
import Fade from 'react-reveal/Fade';
import {useCart} from 'react-use-cart';

function Dulces() {

    const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

    useEffect(
		() => {
			tag === 'all' ? setFilteredImages(Cookies) : setFilteredImages(Cookies.filter(Cookies => Cookies.tag === tag));
		},
		[tag]
	);

    const{addItem}= useCart();

    return (
        <div className='filter'>
            <div className='filter-box'>
                <div className="tags">
                    <TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} />
                    <TagButton name="Chocolate" tagActive={tag === 'Chocolate' ? true : false} handleSetTag={setTag} />
                    <TagButton name="Galleta" tagActive={tag === 'Galleta' ? true : false} handleSetTag={setTag} />
                    <TagButton name="Miel" tagActive={tag === 'Miel' ? true : false} handleSetTag={setTag} />
                </div>
                <Fade bottom cascade>
                    <div className="container">
                            {filteredImages.map(Cookies => (
                                <div key={Cookies.id} className="image-card">
                                    <a href='#'>
                                        <img loading='lazy' className="image" src={Cookies.img} alt={Cookies.title}/>
                                    </a>
                                    <div className='card-botton'>
                                        <div className='description'>
                                            <p>{Cookies.title}</p>
                                            <p>S/.{Cookies.price}</p>
                                        </div>
                                        <div className='btn-shop' onClick={()=>addItem(Cookies)}>
                                            <button><i class="fas fa-shopping-bag"/> Comprar Ahora</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            ))}
                    </div>
                </Fade>
            </div>      
        </div>
    )
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};

export default Dulces