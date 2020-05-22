
import React from 'react';

import PlayListAddIconButton from 'components/UI/IconButtons/PlayListAddIconButton';
import FastRewindIconButton from 'components/UI/IconButtons/FastRewindIconButton';
import PlayIconButton from 'components/UI/IconButtons/PlayIconButton';
import FastForwardIconButton from 'components/UI/IconButtons/FastForwardIconButton';
import './music-controls-bar.css';

const MusicControlsBar = ({
  color,
  fabColor
}) => (
  <div className={`music-controls-bar ${color}-100`}>
    <div className={`play-list-add ${fabColor}`}>
      <PlayListAddIconButton />
    </div>
    <div className='music-controls'>
      <FastRewindIconButton withHoverEffect />
      <PlayIconButton withHoverEffect />
      <FastForwardIconButton withHoverEffect />
    </div>
  </div>
);

export default MusicControlsBar;
