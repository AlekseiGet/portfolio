import React, { useEffect } from 'react';
import ReviewsBlock from '../components/reviews/ReviewsBlock';

const Reviews = () => {

    useEffect(() => {
      document.documentElement.scrollIntoView(true);
    }, []);
    return (
        <div>
            <h1>Здесь будут отзывы</h1>
            <h1>Страница находится в разработке</h1>
            <ReviewsBlock/>
        </div>
    );
};

export default Reviews;