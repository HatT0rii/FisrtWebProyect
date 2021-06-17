import React,{useState} from 'react';


function Carrito() {
    const [filteredImages, setCardImages] = useState([]);

    const onAdd = (Fiber) =>{
        const exist = filteredImages.find(x => x.N === Fiber.N);
        if(exist){
            setCardImages(filteredImages.map(x => x.N === Fiber.N ? {...exist, qty: exist.qty +1}: x )
            );
        } else{
            setCardImages([...filteredImages,{...Fiber,qty: 1}]);
        }
    };

    return (
        <div className='carrito'>
            <h1>Carrito</h1>
            <div>
                {filteredImages.length === 0 && <div>Carrito Vacio por ahora</div>}
                {filteredImages.map(Fiber=>(
                    <div key={Fiber.N} className='#'>
                        <div>{Fiber.id}</div>
                        <div>{Fiber.title}</div>
                        <div>
                            <button onClick={()=>onAdd(Fiber)} className>-</button>
                            <button onClick={()=>onAdd(Fiber)} className>+</button>
                        </div>

                    </div>
                ))}
            </div>           
        </div>
    )
}
export default Carrito