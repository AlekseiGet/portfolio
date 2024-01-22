import React, { useEffect, useState } from 'react';
import cl from "./sliderGalery.module.css";
import MyButtonBlue from '../ui/button/MyButtonBlue';
import slide1 from "../../img/gallery/1.jpg";
import slide2 from "../../img/gallery/2.jpg";
import slide3 from "../../img/gallery/3.jpg";
import slide4 from "../../img/gallery/4.jpg";
import slide5 from "../../img/gallery/5.jpg";
import Aos from "aos";
import "aos/dist/aos.css"; 

const SliderGalery = (props) => {
  
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
    return (
      <div className={cl.slider_body}>
        <div className={cl.slader_container}>
          <h1 data-aos="fade-up">Фотогалерея</h1>

          <input type="radio" name="slider" className={cl.item_1} id="item_1" />
          <input type="radio" name="slider" className={cl.item_2} id="item_2" />
          <input
            type="radio"
            name="slider"
            className={cl.item_3}
            id="item_3"
            defaultChecked
          />
          <input type="radio" name="slider" className={cl.item_4} id="item_4" />
          <input type="radio" name="slider" className={cl.item_5} id="item_5" />

          <div data-aos="fade-up" className={cl.cards}>
            <label
              htmlFor="item_1"
              id="song_1"
              className={[cl.card, cl.song_1].join(" ")}
            >
              <img src={slide1} />
            </label>
            <label
              htmlFor="item_2"
              id="song_2"
              className={[cl.card, cl.song_2].join(" ")}
            >
              <img src={slide2} />
            </label>
            <label
              htmlFor="item_3"
              id="song_3"
              className={[cl.card, cl.song_3].join(" ")}
            >
              <img src={slide3} />
            </label>
            <label
              htmlFor="item_4"
              id="song_4"
              className={[cl.card, cl.song_4].join(" ")}
            >
              <img src={slide4} />
            </label>
            <label
              htmlFor="item_5"
              id="song_5"
              className={[cl.card, cl.song_5].join(" ")}
            >
              <img src={slide5} />
            </label>
          </div>
          <div data-aos="fade-up" className={cl.slader_container_button}>
            {props.toBtn
            ?  <MyButtonBlue textBtn={props.textBtn} toBtn={props.toBtn} />
            : <div></div>
            }
            
          </div>
        </div>
      </div>
    );
};

export default SliderGalery;