
import React from 'react';

import StarFillIcon from 'components/UI/SvgIcons/StarFillIcon';
import StarOutlineIcon from 'components/UI/SvgIcons/StarOutlineIcon';
import IconButtonWrapper from 'hoc/IconButtonWrapper';
import './favorites-button.css';

const FavoritesButton = ({
  favoritesOpen,
  ...rest
}) => (
  <IconButtonWrapper
    className='favorites-button'
    {...rest}
    withHoverEffect>
    {favoritesOpen ? (
      <StarFillIcon
        width={32}
        height={32} />
    ) : (
      <StarOutlineIcon
        width={32}
        height={32} />
    )}
  </IconButtonWrapper>
);

export default FavoritesButton;
