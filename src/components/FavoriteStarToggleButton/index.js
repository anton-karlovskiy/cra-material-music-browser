
import React from 'react';

import IconButtonWrapper from 'hoc/IconButtonWrapper';

const FavoriteStarToggleButton = ({
  selected = false,
  addToFavorites,
  removeFromFavorites,
  width,
  height,
  ...rest
}) => {
  const onClickHandler = () => {
    selected ? removeFromFavorites() : addToFavorites();
  };

  return (
    <IconButtonWrapper
      onClick={onClickHandler}
      {...rest}>
      {selected ? (
        <svg
          width={width || '24'}
          height={height || '24'}
          viewBox='0 0 32 32'
          version='1.1'>
          <title>icon 23 star</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g
            id='Page-1'
            stroke='none'
            strokeWidth='1'
            fillRule='evenodd'>
            <g id='icon-23-star'>
              <polygon
                id='star'
                points='16 22 7 28 11 18 2 12 12 12 16 2 20 12 30 12 21 18 25 28'>
              </polygon>
            </g>
          </g>
        </svg>
      ) : (
        <svg
          width={width || '24'}
          height={height || '24'}
          viewBox='0 0 32 32'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'>
          <title>icon 23 star</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g
            id='Page-1'
            stroke='none'
            strokeWidth='1'
            fillRule='evenodd'>
            <g id='icon-23-star'>
              <path
                d='M16,23 L7,29 L11,19 L2,13 L12,13 L16,3 L20,13 L30,13 L21,19 L25,29 L16,23 L16,23 Z M16,21.7530518 L9.20001221,26.2999878 L12.4000244,18.6000061 L5.20001221,14 L12.6999512,14 L16,5.5 L19.3000488,14 L26.8000488,14 L19.5999756,18.6000061 L22.8000488,26.2999878 L16,21.7530518 L16,21.7530518 Z'
                id='star'>
              </path>
            </g>
          </g>
        </svg>
      )}
    </IconButtonWrapper>
  );
};

export default FavoriteStarToggleButton;
