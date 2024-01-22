import React, { useContext, useEffect, useState } from 'react';
import cl from "../css/galery.module.css"
import SliderGalery from '../components/sladerGalery/SliderGalery';
import BlocKImage from '../components/ui/blockImage/BlocKImage';
import { GaleryImage } from '../context/Context';



const Galery = () => {

  const ItemMass = useContext(GaleryImage)
    
useEffect(() => {
  document.documentElement.scrollIntoView(true);
}, []);
    return (
      <div>
        <h1>Галерея</h1>
        <SliderGalery />
        <BlocKImage image={ItemMass} jusCont={"center"} />
      </div>
    );
};

export default Galery;