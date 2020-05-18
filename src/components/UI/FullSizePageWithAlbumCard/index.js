
// ray test touch <
import React from 'react';

import PlayListAddIconButton from 'components/UI/IconButtons/PlayListAddIconButton';
import FastRewindIconButton from 'components/UI/IconButtons/FastRewindIconButton';
import PlayIconButton from 'components/UI/IconButtons/PlayIconButton';
import FastForwardIconButton from 'components/UI/IconButtons/FastForwardIconButton';
import './full-size-page-with-album-card.css';

const FullSizePageWithAlbumCard = ({
  openedAlbum,
  closeAlbum
}) => {
  const {
    id,
    color,
    artworkUrl,
    albumName,
    artistName
  } = openedAlbum;

  return (
    <div className='fullsize-page-with-card'>
      <div
        id='fixed'
        className={`${color}-100`} />
      <div
        id='bg-img'
        style={{
          backgroundImage: `url("${artworkUrl}")`,
        }}
        className='fade'>
      </div>
      <div
        id='card'
        className={`${color}-300`}>
        <div className='container'>
          <div
            style={{
              backgroundImage: `url("${artworkUrl}")`,
            }}
            className='album-art' />
          <div className='album-details'>
            <svg
              id='Layer_1'
              className='favorite-star'
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 25 25'>
              <title>Star</title>
              <path
                id='Star'
                d='M24.93,8.76a1.06,1.06,0,0,0-1-.72h-8L13.51.76a1.1,1.1,0,0,0-1-.76,1,1,0,0,0-1,.71L9.07,8h-8a1.06,1.06,0,0,0-1,.72A1.11,1.11,0,0,0,.4,10L7,15.12,4.52,23.57a1,1,0,0,0,.41,1.18,1.05,1.05,0,0,0,1.26,0l6.32-4.83,6.32,4.82a1,1,0,0,0,1.25,0,1.06,1.06,0,0,0,.42-1.18L18,15.07,24.62,10A1.11,1.11,0,0,0,24.93,8.76Zm-19,15.57h0Z'
                fill='#FFFFFF' />
            </svg>
            <div className='album-text'>
              <span className='album-name'>{albumName}</span>
              <span className='artist-name'>{artistName}</span>
            </div>
            <div
              id='lowerbar'
              className={`${color}-100`}>
              <div id='fab'>
                <PlayListAddIconButton />
              </div>
              <div className='music-control'>
                <FastRewindIconButton />
                <PlayIconButton />
                <FastForwardIconButton />
              </div>
            </div>
          </div>
        </div>
        <div className='album-list'>
          <table>
            {/* {% for index in range(0, 20) -%}
              <tr>
                <td>{{index}}</td>
                <td>Song name</td>
                <td>3:54</td>
              </tr>
            {%- endfor %} */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default FullSizePageWithAlbumCard;
// ray test touch >
