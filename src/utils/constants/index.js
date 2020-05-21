
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
    label: 'Anguilla',
    value: 'ai'
  },
  {
    label: 'Antigua and Barbuda',
    value: 'ag'
  },
  {
    label: 'Argentina',
    value: 'ar'
  },
  {
    label: 'Armenia',
    value: 'am'
  },
  {
    label: 'Australia',
    value: 'au'
  },
  {
    label: 'Austria',
    value: 'at'
  },
  {
    label: 'Azerbaijan',
    value: 'az'
  },
  {
    label: 'Bahrain',
    value: 'bh'
  },
  {
    label: 'Barbados',
    value: 'bb'
  },
  {
    label: 'Belarus',
    value: 'by'
  },
  {
    label: 'Belgium',
    value: 'be'
  },
  {
    label: 'Belize',
    value: 'bz'
  },
  {
    label: 'Bermuda',
    value: 'bm'
  },
  {
    label: 'Bolivia',
    value: 'bo'
  },
  {
    label: 'Botswana',
    value: 'bw'
  },
  {
    label: 'Brazil',
    value: 'br'
  },
  {
    label: 'British Virgin Islands',
    value: 'vg'
  },
  {
    label: 'Bulgaria',
    value: 'bg'
  },
  {
    label: 'Cambodia',
    value: 'kh'
  },
  {
    label: 'Canada',
    value: 'ca'
  },
  {
    label: 'Cape Verde',
    value: 'cv'
  },
  {
    label: 'Cayman Islands',
    value: 'ky'
  },
  {
    label: 'Chile',
    value: 'cl'
  },
  {
    label: 'China',
    value: 'cn'
  },
  {
    label: 'Colombia',
    value: 'co'
  },
  {
    label: 'Costa Rica',
    value: 'cr'
  },
  {
    label: 'Cyprus',
    value: 'cy'
  },
  {
    label: 'Czech Republic',
    value: 'cz'
  },
  {
    label: 'Denmark',
    value: 'dk'
  },
  {
    label: 'Dominica',
    value: 'dm'
  },
  {
    label: 'Dominican Republic',
    value: 'do'
  },
  {
    label: 'Ecuador',
    value: 'ec'
  },
  {
    label: 'Egypt',
    value: 'eg'
  },
  {
    label: 'El Salvador',
    value: 'sv'
  },
  {
    label: 'Estonia',
    value: 'ee'
  },
  {
    label: 'Federated States of Micronesia',
    value: 'fm'
  },
  {
    label: 'Fiji',
    value: 'fj'
  },
  {
    label: 'Finland',
    value: 'fi'
  },
  {
    label: 'France',
    value: 'fr'
  },
  {
    label: 'Gambia',
    value: 'gm'
  },
  {
    label: 'Germany',
    value: 'de'
  },
  {
    label: 'Ghana',
    value: 'gh'
  },
  {
    label: 'Great Britain',
    value: 'gb'
  },
  {
    label: 'Greece',
    value: 'gr'
  },
  {
    label: 'Grenada',
    value: 'gd'
  },
  {
    label: 'Guatemala',
    value: 'gt'
  },
  {
    label: 'Guinea Bissau',
    value: 'gw'
  },
  {
    label: 'Honduras',
    value: 'hn'
  },
  {
    label: 'Hong Kong',
    value: 'hk'
  },
  {
    label: 'Hungaria',
    value: 'hu'
  },
  {
    label: 'India',
    value: 'in'
  },
  {
    label: 'Indonesia',
    value: 'id'
  },
  {
    label: 'Ireland',
    value: 'ie'
  },
  {
    label: 'Israel',
    value: 'il'
  },
  {
    label: 'Italy',
    value: 'it'
  },
  {
    label: 'Japan',
    value: 'jp'
  },
  {
    label: 'Jordan',
    value: 'jo'
  },
  {
    label: 'Kazakhstan',
    value: 'kz'
  },
  {
    label: 'Kenya',
    value: 'ke'
  },
  {
    label: 'Krygyzstan',
    value: 'kg'
  },
  {
    label: 'Laos',
    value: 'la'
  },
  {
    label: 'Latvia',
    value: 'lv'
  },
  {
    label: 'Lebanon',
    value: 'lb'
  },
  {
    label: 'Lithuania',
    value: 'lt'
  },
  {
    label: 'Luxembourg',
    value: 'lu'
  },
  {
    label: 'Macau',
    value: 'mo'
  },
  {
    label: 'Malaysia',
    value: 'my'
  },
  {
    label: 'Malta',
    value: 'mt'
  },
  {
    label: 'Mauritius',
    value: 'mu'
  },
  {
    label: 'Mexico',
    value: 'mx'
  },
  {
    label: 'Moldova',
    value: 'md'
  },
  {
    label: 'Mongolia',
    value: 'mn'
  },
  {
    label: 'Nepal',
    value: 'np'
  },
  {
    label: 'Netherlands',
    value: 'nl'
  },
  {
    label: 'New Zealand',
    value: 'nz'
  },
  {
    label: 'Nicaragua',
    value: 'ni'
  },
  {
    label: 'Niger',
    value: 'ne'
  },
  {
    label: 'Nigeria',
    value: 'ng'
  },
  {
    label: 'Norway',
    value: 'no'
  },
  {
    label: 'Oman',
    value: 'om'
  },
  {
    label: 'Panama',
    value: 'pa'
  },
  {
    label: 'Papua New Guinea',
    value: 'pg'
  },
  {
    label: 'Paraguay',
    value: 'py'
  },
  {
    label: 'Peru',
    value: 'pe'
  },
  {
    label: 'Philippines',
    value: 'ph'
  },
  {
    label: 'Poland',
    value: 'pl'
  },
  {
    label: 'Portugal',
    value: 'pt'
  },
  {
    label: 'Republic of Trinidad and Tobago',
    value: 'tt'
  },
  {
    label: 'Romania',
    value: 'ro'
  },
  {
    label: 'Russia',
    value: 'ru'
  },
  {
    label: 'Saint Kitts and Nevis',
    value: 'kn'
  },
  {
    label: 'Saudi Arabia',
    value: 'sa'
  },
  {
    label: 'Singapore',
    value: 'sg'
  },
  {
    label: 'Slovakia',
    value: 'sk'
  },
  {
    label: 'Slovenia',
    value: 'si'
  },
  {
    label: 'South Africa',
    value: 'za'
  },
  {
    label: 'South Korea',
    value: 'kr'
  },
  {
    label: 'Spain',
    value: 'es'
  },
  {
    label: 'Sri Lanka',
    value: 'lk'
  },
  {
    label: 'Swaziland',
    value: 'sz'
  },
  {
    label: 'Sweden',
    value: 'se'
  },
  {
    label: 'Switzerland',
    value: 'ch'
  },
  {
    label: 'Taiwan',
    value: 'tw'
  },
  {
    label: 'Tajikistan',
    value: 'tj'
  },
  {
    label: 'Thailand',
    value: 'th'
  },
  {
    label: 'Turkey',
    value: 'tr'
  },
  {
    label: 'Turkmenistan',
    value: 'tm'
  },
  {
    label: 'Uganda',
    value: 'ug'
  },
  {
    label: 'Ukraine',
    value: 'ua'
  },
  {
    label: 'United Arab Emirates',
    value: 'ae'
  },
  {
    label: 'United States of America',
    value: 'us'
  },
  {
    label: 'Uzbekistan',
    value: 'uz'
  },
  {
    label: 'Venezuela',
    value: 've'
  },
  {
    label: 'Vietnam',
    value: 'vn'
  },
  {
    label: 'Zimbabwe',
    value: 'zw'
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
  ],
  [FEED_TYPE_OPTIONS[3].value]: [
    {
      label: 'All',
      value: 'all'
    }
  ],
  [FEED_TYPE_OPTIONS[4].value]: [
    {
      label: 'All',
      value: 'all'
    }
  ]
};

const RESULTS_LIMIT_OPTIONS = [
  {
    label: '12',
    value: '12'
  },
  {
    label: '24',
    value: '24'
  },
  {
    label: '60',
    value: '60'
  },
  {
    label: '96',
    value: '96'
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
