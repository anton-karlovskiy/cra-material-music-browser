
// ray test touch <
import React from 'react';

import FavoriteStarIconButton from 'components/UI/IconButtons/FavoriteStarIconButton';
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
            <FavoriteStarIconButton className='favorite-star' />
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
        {/* <div className='album-list'>
          <table>
            {% for index in range(0, 20) -%}
              <tr>
                <td>{{index}}</td>
                <td>Song name</td>
                <td>3:54</td>
              </tr>
            {%- endfor %}
          </table>
        </div> */}
      </div>
    </div>
  );
};

export default FullSizePageWithAlbumCard;
// ray test touch >
