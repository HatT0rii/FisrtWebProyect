import React, {useRef, useEffect, useCallback} from 'react'
import './Slider.css'
import Img from './asset/Img';

function Slider() {
    const slidershow = useRef(null);

    const before = () =>{
        if(slidershow.current.children.length > 0){
            const last = slidershow.current.children.length - 1;
            const lastElement = slidershow.current.children[last];

            slidershow.current.insertBefore(lastElement, slidershow.current.firstChild);

            slidershow.current.style.transition ='none';

            const tamañoSlide = slidershow.current.children[0].offsetWidth;
            slidershow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            setTimeout(()=>{
                slidershow.current.style.transition = `300ms ease-out all`;
                slidershow.current.style.transform = `translateX(0)`;
            },30);
        }
    };
    
    const after = useCallback (()=>{
        if(slidershow.current.children.length > 0){
            const firstElement = slidershow.current.children[0];

            slidershow.current.style.transition = `300ms ease-out all`;
            
            const tamañoSlide = slidershow.current.children[0].offsetWidth;
            slidershow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            const transition = ()=>{
                slidershow.current.style.transition ='none';
                slidershow.current.style.transform ='translateX(0)';

                slidershow.current.appendChild(firstElement);
                slidershow.current.removeEventListener('transitionend', transition);
            }

            slidershow.current.addEventListener('transitionend', transition);
        }
    },500);

    // useEffect(()=>{
    //     const intervalos= setInterval(()=>{
    //         after();
    //     },2000);

    //     slidershow.current.addEventListener('mouseenter', ()=>{
    //         clearInterval(intervalos);
    //     });
    // },[]);

    return (
        <main>
            <div className='principal'>
                <div className='slider-show' ref={slidershow}>
                    <div className='slider'>
                        <img loading='lazy' src={Img[1].id} />
                    </div>
                    <div className='slider'>
                        <img loading='lazy' src={Img[2].id} />
                    </div>
                    <div className='slider'>
                        <img loading='lazy' src={Img[3].id} />
                    </div>
                    <div className='slider'>
                        <img loading='lazy' src={Img[4].id} />
                    </div>
                </div>
                <div className='btn'>
                    <i onClick={before} class="fas fa-angle-left btn-left"/>
                    <i onClick={after} class="fas fa-angle-right btn-right"/>
                </div>
            </div>
        </main>
    )
}

export default Slider
