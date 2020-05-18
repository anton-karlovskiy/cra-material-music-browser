
// ray test touch <
import React from 'react';

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
      <div id='fixed'>
      </div>
      <div
        id='bg-img'
        className='fade'>
      </div>
      <div id='card'>
        <div className='container'>
          <div className='album-art'>
          </div>
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
              <span className='album-name'></span>
              <span className='artist-name'></span>
            </div>
            <div id='lowerbar'>
              <div id='fab'>
                <svg
                  width='20px'
                  height='14px'
                  viewBox='0 0 20 14'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>playlist_add</title>
                  <desc>Created with Sketch.</desc>
                  <g id='Icons' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                    <g id='Two-Tone' transform='translate(-238.000000, -956.000000)'>
                      <g id='AV' transform='translate(100.000000, 852.000000)'>
                        <g id='Two-Tone-/-AV-/-playlist_add' transform='translate(136.000000, 98.000000)'>
                          <g>
                            <polygon
                              id='Path'
                              points='0 0 24 0 24 24 0 24'>
                            </polygon>
                            <path
                              d='M2,14 L10,14 L10,16 L2,16 L2,14 Z M2,10 L14,10 L14,12 L2,12 L2,10 Z M2,6 L14,6 L14,8 L2,8 L2,6 Z M18,10 L16,10 L16,14 L12,14 L12,16 L16,16 L16,20 L18,20 L18,16 L22,16 L22,14 L18,14 L18,10 Z'
                              id='ðŸ”¹-Primary-Color'
                              fill='#FFFFFF'>
                            </path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className='music-control'>
                <svg
                  version='1.1'
                  id='Capa_1'
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  viewBox='0 0 55 55'>
                  <polygon points='28,27.5 55,8.513 55,27.155 55,46.487' />
                  <polygon points='0,27.5 27,8.5 27,27.5 27,46.5' />
                </svg>
                <svg
                  viewBox='0 0 48 48'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M-838-2232H562v3600H-838z'
                    fill='none' />
                  <path d='M16 10v28l22-14z' />
                  <path
                    d='M0 0h48v48H0z'
                    fill='none' />
                </svg>
                <svg
                  version='1.1'
                  id='Capa_1'
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  viewBox='0 0 55 55'>
                  <polygon points='27,27.5 0,46.487 0,27.845 0,8.513' />
                  <polygon points='55,27.5 28,46.5 28,27.5 28,8.5' />
                </svg>
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
