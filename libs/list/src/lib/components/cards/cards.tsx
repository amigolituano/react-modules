import React from 'react';
import { connect } from 'react-redux';
import { ListContext } from '../../store/store';

import './cards.scss';

/* eslint-disable-next-line */
export interface CardsProps {}

const Cards = (props: CardsProps) => {
  return (
    <div>
      <h1>Welcome to cards!</h1>
    </div>
  );
};

export default connect((state) => state, null, null, { context: ListContext })(
  Cards
);
