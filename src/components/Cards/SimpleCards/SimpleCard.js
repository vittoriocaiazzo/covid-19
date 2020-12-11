import React from 'react';
import './SimpleCards.css';

import simpleCardsStyles from '../../../styles/simple-cards-styles.js';

const SimpleCard = (props) => {
  console.log(props.value);
  return (
    <div className="cards__card">
      <div className={`simple-color ${simpleCardsStyles[props.title].color}`}>
        <img
          src={simpleCardsStyles[props.title].icon}
          className="simple-icon"
          alt="icon"
        />
      </div>
      <div className={'cards__card-value'}>
        {props.todaysData && props.value > 0
          ? `+${props.value.toLocaleString()}`
          : props.value.toLocaleString()}
      </div>
      <div className={'cards__card-title'}>{props.label}</div>
      <div className="cards__card-yesterday-value">
        Ieri:{' '}
        {props.todaysData && props.yesterday > 0
          ? `+${props.yesterday.toLocaleString()}`
          : props.yesterday.toLocaleString()}
      </div>
    </div>
  );
};

export default SimpleCard;
