
import React from 'react';

import IconButtonWrapper from 'hoc/IconButtonWrapper';
import StarFillIcon from 'components/UI/SvgIcons/StarFillIcon';
import StarOutlineIcon from 'components/UI/SvgIcons/StarOutlineIcon';
import './favorite-star-toggle-button.css';

const FavoriteStarToggleButton = ({
  selected = false,
  addToFavorites,
  removeFromFavorites,
  width,
  height,
  className,
  ...rest
}) => {
  const onClickHandler = event => {
    event.stopPropagation();
    selected ? removeFromFavorites() : addToFavorites();
  };

  return (
    <IconButtonWrapper
      className={`favorite-star-toggle-button ${className}`}
      onClick={onClickHandler}
      {...rest}>
      {selected ? (
        <StarFillIcon />
      ) : (
        <StarOutlineIcon />
      )}
    </IconButtonWrapper>
  );
};

export default FavoriteStarToggleButton;
