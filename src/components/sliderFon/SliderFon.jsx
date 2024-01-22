import React, { useEffect, useState, useRef } from 'react';
import cl from './sliderFon.module.css';
import background from "../../img/photo_2022-08-11_21-21-17.jpg";
import Aos from "aos";
import "aos/dist/aos.css"; 

const SliderFon = (props) => {
  const [ text, setText]= useState(props.text);
  const [ opacity, setOpacity] = useState("1");
  const [newHeight, setNewHeight] = useState("100%");
  const listRef = useRef();

useEffect(() => {
  getListSize(0)
}, []);

useEffect(() => {
        Aos.init({ duration: 2500  });
    }, [])

const getListSize = (s) => {
  const height = listRef.current.offsetTop;
  if (height!= null) {
    const sum = height-s;
    setNewHeight(sum);
    setOpacity( `0.${sum}`);
  }

};

const btnUp = () => {
  window.addEventListener('scroll', () => {
   const scrollY = window.scrollY ;
     if (scrollY > 10) {
       getListSize(scrollY)
     }               
   });        
  }
btnUp()
   
    return (
        <div >
            <div className={cl.cbp_fbscroller}>               
                <section  style={{ backgroundImage: `url(${props.image})` }} className={cl.fbsection1} >     
                    <div style={{ alignItems: props.position, height:`${newHeight}px`, opacity: opacity }} className={cl.content_box}>
                        <div className={[cl.cursor, cl.typewriter_animation].join(" ")} >
                           <h2 >{props.title}</h2>
                        </div>                    
                        <span data-aos="fade-up"  data-aos-delay = "1800" data-aos-once="true" style={{fontSize:"2em", fontWeight: '800'}}  >{text[0]}</span>
                        <span  data-aos="fade-left" data-aos-delay = "2800" data-aos-once="true" >{text[1]}</span>                                                                 
                     </div>                   
                    <div className={cl.fbsection1_portfolio} >
                       <h2 data-aos="zoom-in" >PORTFOLIO</h2> 
                     </div> 
                     <div ref={listRef} ></div>                                     
                </section>                
            </div>
        </div>
    );
};

export default SliderFon;

/*<div class="parallax">
    <div id="group1" class="parallax__group">
      <div class="parallax__layer parallax__layer--base">
        <div class="title">Base Layer</div>
      </div>
    </div>
    <div id="group2" class="parallax__group">
      <div class="parallax__layer parallax__layer--base">
        <div class="title">Base Layer</div>
      </div>
      <div class="parallax__layer parallax__layer--back">
        <div class="title">Background Layer</div>
      </div>
    </div>
    <div id="group3" class="parallax__group">
      <div class="parallax__layer parallax__layer--fore">
        <div class="title">Foreground Layer</div>
      </div>
      <div class="parallax__layer parallax__layer--base">
        <div class="title">Base Layer</div>
      </div>
    </div>
    <div id="group4" class="parallax__group">
      <div class="parallax__layer parallax__layer--base">
        <div class="title">Base Layer</div>
      </div>
      <div class="parallax__layer parallax__layer--back">
        <div class="title">Background Layer</div>
      </div>
      <div class="parallax__layer parallax__layer--deep">
        <div class="title">Deep Background Layer</div>
      </div>
    </div>
    <div id="group5" class="parallax__group">
      <div class="parallax__layer parallax__layer--fore">
        <div class="title">Foreground Layer</div>
      </div>
      <div class="parallax__layer parallax__layer--base">
        <div class="title">Base Layer</div>
      </div>
    </div>
    <div id="group6" class="parallax__group">
      <div class="parallax__layer parallax__layer--back">
        <div class="title">Background Layer</div>
      </div>
      <div class="parallax__layer parallax__layer--base">
        <div class="title">Base Layer</div>
      </div>
    </div>
    <div id="group7" class="parallax__group">
      <div class="parallax__layer parallax__layer--base">
        <div class="title">Base Layer</div>
      </div>
    </div>
  </div>

*/




