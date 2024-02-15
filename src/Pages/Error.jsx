import React from 'react';
import errrorImage from '../img/error.jpg'
import SliderFon from '../components/sliderFon/SliderFon';

const Error = () => {


  /*
  useEffect(() => {
      document.documentElement.scrollIntoView(true);
    }, []);

    image={background}
          title={"Getmanov Aleksey "}
          text={[
            "FRONT-END DEVELOPER",
            "HTML, CSS, JS, TS, REACT ..."
          ]}
          position={"left"}
  */
    
    return (
      <div>
        <SliderFon
          image={errrorImage}
          title={""}
          text={[]}
          position={"center"}
        />
      </div>
    );
};

export default Error;