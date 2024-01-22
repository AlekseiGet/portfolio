import React, { useEffect, useRef, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import cl from './blockImage.module.css'

const BlocKImage = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])


    /*    const [active, setActive] = useState('')
    const firstEllement = useRef()
    const observer = useRef()

    useEffect(() => {
        var callback = function (entries, observer) {
            if (entries[0].isIntersecting) {
                setActive("pops_up_box")
            }
        }
        observer.current = new IntersectionObserver(callback)
        observer.current.observe(firstEllement.current)},[])
        

    ref={firstEllement}
    */ 

    return (
        
        <div  style={{ justifyContent: props.jusCont }} className={cl.block_image_item }>
            {props.image.map(element=>
                <img data-aos="fade-up" key={element} src={element} alt="Фото" />
               )
             }          
        </div>
      
        
    );
};

export default BlocKImage;

