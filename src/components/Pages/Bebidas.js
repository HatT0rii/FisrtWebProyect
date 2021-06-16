import React,{useEffect, useState} from 'react'
import Drink from '../asset/Drink';
import '../Filter.css'

function Fibras() {

    const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

    useEffect(
		() => {
			tag === 'all' ? setFilteredImages(Drink) : setFilteredImages(Drink.filter(Drink => Drink.tag === tag));
		},
		[tag]
	);

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
                <div className="container">
                        {filteredImages.map(Drink => (
                            <div key={Drink.N} className="image-card">
                                <a href='#'>
                                    <img loading='lazy' className="image" src={Drink.id} alt={Drink.title}/>
                                </a>
                                <div className='card-botton'>
                                    <div className='description'>
                                        <p>{Drink.title}</p>
                                        <p>{Drink.price}</p>
                                    </div>
                                    <div className='btn-shop'>
                                        <button><i class="fas fa-shopping-bag"/> Comprar Ahora</button>
                                    </div>
                                </div>
                                
                            </div>
                        ))}
                </div>
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