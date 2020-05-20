
const APP_NAME = 'Material Music';

const COUNT_OF_TILES_ON_VIEWPORT = 12;

const INPUT_NAMES = {
  COUNTRY_OR_REGION: 'country-or-region',
  FEED_TYPE: 'feed-type',
  GENRE: 'genre',
  RESULTS_LIMIT: 'results-limit'
};

// TODO: dig into more
const PROXY_URL = 'https://cors-anywhere.herokuapp.com';

const COUNTRY_OR_REGION_OPTIONS = [
  {
    label: 'United Kingdom',
    value: 'gb'
  },
  {
    label: 'United States',
    value: 'us'
  }
];

const FEED_TYPE_OPTIONS = [
  {
    label: 'Coming Soon',
    value: 'coming-soon'
  },
  {
    label: 'Hot Tracks',
    value: 'hot-tracks'
  },
  {
    label: 'New Releases',
    value: 'new-releases'
  },
  {
    label: 'Top Albums',
    value: 'top-albums'
  },
  {
    label: 'Top Songs',
    value: 'top-songs'
  }
];

const GENRE_OPTIONS = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Country',
    value: 'country'
  },
  {
    label: 'Heavy Metal',
    value: 'heavy-metal'
  }
];

const RESULTS_LIMIT_OPTIONS = [
  {
    label: '10',
    value: 10
  },
  {
    label: '25',
    value: 25
  },
  {
    label: '50',
    value: 50
  },
  {
    label: '100',
    value: 100
  }
];

export {
  APP_NAME,
  COUNT_OF_TILES_ON_VIEWPORT,
  INPUT_NAMES,
  PROXY_URL,
  COUNTRY_OR_REGION_OPTIONS,
  FEED_TYPE_OPTIONS,
  GENRE_OPTIONS,
  RESULTS_LIMIT_OPTIONS
};
