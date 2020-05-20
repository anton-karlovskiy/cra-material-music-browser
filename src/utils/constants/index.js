
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

const GENRE_OPTIONS = {
  [FEED_TYPE_OPTIONS[0].value]: [
    {
      label: 'All',
      value: 'all'
    }
  ],
  [FEED_TYPE_OPTIONS[1].value]: [
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
  ],
  [FEED_TYPE_OPTIONS[2].value]: [
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
  ],[FEED_TYPE_OPTIONS[3].value]: [
    {
      label: 'All',
      value: 'all'
    }
  ],
};

const RESULTS_LIMIT_OPTIONS = [
  {
    label: '12',
    value: 12
  },
  {
    label: '24',
    value: 24
  },
  {
    label: '60',
    value: 60
  },
  {
    label: '96',
    value: 96
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
