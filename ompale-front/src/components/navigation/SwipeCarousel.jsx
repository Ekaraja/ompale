import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SwipeCarousel = () => (
  <AutoPlaySwipeableViews>
    <div>slide n°1</div>
    <div>slide n°2</div>
    <div>slide n°3</div>
  </AutoPlaySwipeableViews>
);

export default SwipeCarousel;