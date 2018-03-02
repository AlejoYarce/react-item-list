import React from 'react';

import './Item.css';

const item = props => (
  <div onClick={props.clickItem} className={props.left ? 'card left' : 'card right'}>
    <img src={props.photo.url} alt='Photos' className='photo' />
    <div className='container'>
      <p>{props.photo.title}</p>
    </div>
  </div>
);

export default item;
