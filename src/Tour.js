import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const obj = document.querySelectorAll('.single-tour')
  // console.log(obj);
  const [readMore, setReadMore] = useState(false);
  return <article className="single-tour" id={id}>
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">{price}</h4>
      </div>
      <p>
        {readMore ? info : info.substring(0, 100)}
        <button onClick={() => setReadMore(!readMore)}>{readMore ? `Show less` : `Read More`}</button>
      </p>
      <button id={id} className="delete-btn" onClick={() => removeTour(id)}>not interested</button>
    </footer>
  </article>;
};

export default Tour;
