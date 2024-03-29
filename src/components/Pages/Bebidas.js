import React,{useEffect, useState} from 'react'
import Drink from '../asset/Drink';
import '../Filter.css'
import Fade from 'react-reveal/Fade';
import {useCart} from 'react-use-cart';

function Bebidas() {

    const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

    useEffect(
		() => {
			tag === 'all' ? setFilteredImages(Drink) : setFilteredImages(Drink.filter(Drink => Drink.tag === tag));
		},
		[tag]
	);

    const{addItem}= useCart();

    return (
        <div className='filter'>
            <div className='filter-box'>
                <div className="tags">
                    <TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} />
                    <TagButton name="Cafe" tagActive={tag === 'Cafe' ? true : false} handleSetTag={setTag} />
                    <TagButton name="Cerveza" tagActive={tag === 'Cerveza' ? true : false} handleSetTag={setTag} />
                    <TagButton name="Leche" tagActive={tag === 'Leche' ? true : false} handleSetTag={setTag} />
                    <TagButton name="Te" tagActive={tag === 'Te' ? true : false} handleSetTag={setTag} />
                    <TagButton name="Yogurt" tagActive={tag === 'Yogurt' ? true : false} handleSetTag={setTag} />
                </div>
                <Fade bottom cascade>
                    <div className="container">
                            {filteredImages.map(Drink => (
                                <div key={Drink.id} className="image-card">
                                    <a href='#'>
                                        <img loading='lazy' className="image" src={Drink.img} alt={Drink.title}/>
                                    </a>
                                    <div className='card-botton'>
                                        <div className='description'>
                                            <p>{Drink.title}</p>
                                            <p>S/.{Drink.price}</p>
                                        </div>
                                        <div className='btn-shop' onClick={()=>addItem(Drink)}>
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

export default Bebidas