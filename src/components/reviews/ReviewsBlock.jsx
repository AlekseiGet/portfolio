import React, { useEffect, useState } from 'react';
import cl from "./reviewsBlock.module.css"
import MyButtomRed from '../ui/button/MyButtomRed';

const ReviewsBlock = (props) => {
    
    return (
        <div className={[cl.номе_reviews, "pops_up_box"].join(" ")}>
            <h2 data-aos="fade-up"  >Отзывы</h2>
            <div className={[cl.home_reviews_body, "pops_up_box"].join(" ")}>

                <div  className={cl.home_reviews_body_item}>
                    <div className={cl.home_reviews_body_item_video}></div>
                </div>
                <div  className={cl.home_reviews_body_item}>
                    <div className={cl.home_reviews_body_item_video}></div>
                </div>
                <div  className={cl.home_reviews_body_item}>
                    <div className={cl.home_reviews_body_item_video}></div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsBlock;