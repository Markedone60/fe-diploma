import React from "react";
import '../FirstPage.css';

export default function Review() {
  return (
    <section className="review" id="reviews">
      <h2 className="review-header">Отзывы</h2>
      <article className="review-items">
        <div className="review-item">
          <img className="review-item-image" src={require('../../../../images/review-image1.png')} alt="pic" />
          <div className="review-item-body">
            <h2 className="review-item-body-header">Екатерина Вальнова</h2>
            <div className="review-item-body-text">
              Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.
            </div>
          </div>
        </div>
        <div className="review-item">
          <img className="review-item-image" src={require('../../../../images/review-image2.png')} alt="pic" />
          <div className="review-item-body">
            <h2 className="review-item-body-header">Екатерина Вальнова</h2>
            <div className="review-item-body-text">
              Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.
            </div>
          </div>
        </div>
      </article>
      <div className="review-selectors">
        <img className="review-selector" src={require('../../../../images/review-eclipse-on.png')} alt=""/>
        <img className="review-selector" src={require('../../../../images/review-eclipse.png')} alt=""/>
        <img className="review-selector" src={require('../../../../images/review-eclipse.png')} alt=""/>
        <img className="review-selector" src={require('../../../../images/review-eclipse.png')} alt=""/>
        <img className="review-selector" src={require('../../../../images/review-eclipse.png')} alt=""/>
      </div>
    </section>
  )
}