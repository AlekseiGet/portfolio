import React, { useEffect } from "react";
import SliderFon from "../components/sliderFon/SliderFon";
import fon from "../img/1675302863_gas-kvas-com-p-yoga-art-risunok-49.jpg";
import Block from "../components/box/Block";
import gif from "../img/yoga-light_drb.gif";
import BlockTwoo from "../components/box/BlockTwoo";
import MyButtonGreen from "../components/ui/button/MyButtonGreen";

const Contraindications = () => {

  useEffect(() => {
    document.documentElement.scrollIntoView(true);
  }, []);
  return (
    <div>
      <SliderFon
        image={fon}
        title={`Противопоказания к йоге - кому и когда нельзя заниматься.`}
        text={`Советы от гуру`}
        position={"center"}
      />
      <Block
        title={""}
        text={{
          1: `Заниматься йогой полезно. И для физического здоровья и для психологического.
                         Духовные практики, к числу которых принадлежит и йога, помогают противостоять современному агрессивному миру.
                         Эффективность этих практик доказана современными исследователями (причём не британскими).
                         Но есть опасные ситуации, когда йогой лучше не заниматься.`,
        }}
      />
      <Block
        title={"Сначала банально о том, что йогой заниматься полезно."}
        text={{
          1: `Благодаря практике йоги приходит в баланс симпатическая и парасимпатическая части вегетативной нервной системы.
                         Безудержный ритм современной жизни  держит в постоянной активности, в постоянной «вздрюченности» симпатическую, адреналовую ее часть.`,
          2: `А благодаря регулярной практике йоги мы активизируем парасимпатическую часть, что приводит к расслаблению тела и психики.
                          А именно это способствует их регенерации. Что и приводит к благотворному влиянию йоги на всё тело человека.`,
        }}
      />
      <SliderFon
        image={gif}
        title={`И всё было бы хорошо, но к занятиям йогой есть противопоказания.`}
        text={`Это - самая ужасная часть`}
        position={"flex-start"}
      />
      <BlockTwoo />

      <MyButtonGreen
        textBtn={"Пройти пробное занятие"}
        toBtn={"/application"}
      />
      <span style={{ color: "red", fontSize: "16px" }}>
        Весь текст взят из источника :
        <a href="https://realyoga.club/articles/contra-indications">
          {" "}
          https://realyoga.club/articles/contra-indications
        </a>
      </span>
    </div>
  );
};

export default Contraindications;
