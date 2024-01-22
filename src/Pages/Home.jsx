import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import {Themes} from "../App";
import SliderFon from '../components/sliderFon/SliderFon';
import background1 from "../img/matrix.jpg";
import background2 from "../img/1394094442_novye-demki-3.jpg";
import background3 from "../img/gallery/2.jpg";
import MentorUs from '../components/mentor/MentorUs';
import SliderGalery from '../components/sladerGalery/SliderGalery';
import MyButtomRed from '../components/ui/button/MyButtomRed';

const Home = () => {
  const { value, value2 } = useContext(Themes);
  const [choiceTheme, setChoiceTheme] = value;
  const [theme, setTheme] = value2;

  const [background, setBackground] = useState(background1);

  useEffect(() => {
      theme ==='2'? setBackground(background2):
      theme ==='3'? setBackground(background3):
      setBackground(background1)
      
  },[theme])
  
     useEffect(()=> {document.documentElement.scrollIntoView(true);},[])

    return (
      <div >   
        <div id="top"></div>
                
        <SliderFon
          image={background}
          title={"Getmanov Aleksey "}
          text={[
            "FRONT-END DEVELOPER",
            "HTML, CSS, JS, TS, REACT ..."
          ]}
          position={"left"}
        />
        <SliderGalery textBtn={"Увидеть больше"} toBtn={"/galery"} />


      </div>
    );
};

export default Home;