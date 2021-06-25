import React,{useEffect, useState} from 'react'
import Fiber from '../asset/Fiber';
import '../Filter.css';
import Fade from 'react-reveal/Fade';
import {useCart} from 'react-use-cart';


function Fibras() {
    const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

    useEffect(
		() => {
			tag === 'all' ? setFilteredImages(Fiber) : setFilteredImages(Fiber.filter(Fiber => Fiber.tag === tag));
		},
		[tag]
	);

    const{addItem}= useCart();

    return (
        <div className='filter'>
            <div className='filter-box'>
                <div className="tags">
                    <TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} />
                    <TagButton name="Cereal" tagActive={tag === 'Cereal' ? true : false} handleSetTag={setTag} />
                    <TagButton name="Fideo" tagActive={tag === 'Fideo' ? true : false} handleSetTag={setTag} />
                    <TagButton name="Harina" tagActive={tag === 'Harina' ? true : false} handleSetTag={setTag} />
                    <TagButton name="Pan" tagActive={tag === 'Pan' ? true : false} handleSetTag={setTag} />
                </div>
                <Fade bottom cascade>
                    <div className="container">
                        {filteredImages.map((Fiber) => (
                            <div key={Fiber.id} className="image-card">
                                
                                    <img loading='lazy' className="image" src={Fiber.img} alt={Fiber.title}/>
                                
                                <div className='card-botton'>
                                    <div className='description'>
                                        <p>{Fiber.title}</p>
                                        <p>S/.{Fiber.price}</p>
                                    </div>
                                    <div className='btn-shop'onClick={()=>addItem(Fiber)}>
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

export default Fibras