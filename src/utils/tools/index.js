
// inspired by https://gist.github.com/daFish/5990634
const itunesCountries = {
  'al': 'Albania',
  'dz': 'Algeria',
  'ao': 'Angola',
  'ai': 'Anguilla',
  'ag': 'Antigua and Barbuda',
  'ar': 'Argentina',
  'am': 'Armenia',
  'au': 'Australia',
  'at': 'Austria',
  'az': 'Azerbaijan',
  'bs': 'Bahamas',
  'bh': 'Bahrain',
  'bb': 'Barbados',
  'by': 'Belarus',
  'be': 'Belgium',
  'bz': 'Belize',
  'bj': 'Benin',
  'bm': 'Bermuda',
  'bt': 'Bhutan',
  'bo': 'Bolivia',
  'bw': 'Botswana',
  'br': 'Brazil',
  'vg': 'British Virgin Islands',
  'bn': 'Brunei Darussalam',
  'bg': 'Bulgaria',
  'bf': 'Burkina-Faso',
  'kh': 'Cambodia',
  'ca': 'Canada',
  'cv': 'Cape Verde',
  'ky': 'Cayman Islands',
  'td': 'Chad',
  'cl': 'Chile',
  'cn': 'China',
  'co': 'Colombia',
  'cr': 'Costa Rica',
  'hr': 'Croatia',
  'cy': 'Cyprus',
  'cz': 'Czech Republic',
  'cg': 'Democratic Republic of the Congo',
  'dk': 'Denmark',
  'dm': 'Dominica',
  'do': 'Dominican Republic',
  'ec': 'Ecuador',
  'eg': 'Egypt',
  'sv': 'El Salvador',
  'ee': 'Estonia',
  'fm': 'Federated States of Micronesia',
  'fj': 'Fiji',
  'fi': 'Finland',
  'fr': 'France',
  'gm': 'Gambia',
  'de': 'Germany',
  'gh': 'Ghana',
  'gb': 'United Kingdom',
  'gr': 'Greece',
  'gd': 'Grenada',
  'gt': 'Guatemala',
  'gw': 'Guinea Bissau',
  'gy': 'Guyana',
  'hn': 'Honduras',
  'hk': 'Hong Kong',
  'hu': 'Hungaria',
  'is': 'Iceland',
  'in': 'India',
  'id': 'Indonesia',
  'ie': 'Ireland',
  'il': 'Israel',
  'it': 'Italy',
  'jm': 'Jamaica',
  'jp': 'Japan',
  'jo': 'Jordan',
  'kz': 'Kazakhstan',
  'ke': 'Kenya',
  'kg': 'Krygyzstan',
  'kw': 'Kuwait',
  'la': 'Laos',
  'lv': 'Latvia',
  'lb': 'Lebanon',
  'lr': 'Liberia',
  'lt': 'Lithuania',
  'lu': 'Luxembourg',
  'mo': 'Macau',
  'mk': 'Macedonia',
  'mg': 'Madagascar',
  'mw': 'Malawi',
  'my': 'Malaysia',
  'ml': 'Mali',
  'mt': 'Malta',
  'mr': 'Mauritania',
  'mu': 'Mauritius',
  'mx': 'Mexico',
  'md': 'Moldova',
  'mn': 'Mongolia',
  'ms': 'Montserrat',
  'mz': 'Mozambique',
  'na': 'Namibia',
  'np': 'Nepal',
  'nl': 'Netherlands',
  'nz': 'New Zealand',
  'ni': 'Nicaragua',
  'ne': 'Niger',
  'ng': 'Nigeria',
  'no': 'Norway',
  'om': 'Oman',
  'pk': 'Pakistan',
  'pw': 'Palau',
  'pa': 'Panama',
  'pg': 'Papua New Guinea',
  'py': 'Paraguay',
  'pe': 'Peru',
  'ph': 'Philippines',
  'pl': 'Poland',
  'pt': 'Portugal',
  'qa': 'Qatar',
  'tt': 'Republic of Trinidad and Tobago',
  'ro': 'Romania',
  'ru': 'Russia',
  'kn': 'Saint Kitts and Nevis',
  'lc': 'Saint Lucia',
  'vc': 'Saint Vincent and the Grenadines',
  'st': 'Sao Tome e Principe',
  'sa': 'Saudi Arabia',
  'sn': 'Senegal',
  'sc': 'Seychelles',
  'sl': 'Sierra Leone',
  'sg': 'Singapore',
  'sk': 'Slovakia',
  'si': 'Slovenia',
  'sb': 'Soloman Islands',
  'za': 'South Africa',
  'kr': 'South Korea',
  'es': 'Spain',
  'lk': 'Sri Lanka',
  'sr': 'Suriname',
  'sz': 'Swaziland',
  'se': 'Sweden',
  'ch': 'Switzerland',
  'tw': 'Taiwan',
  'tj': 'Tajikistan',
  'tz': 'Tanzania',
  'th': 'Thailand',
  'tn': 'Tunisia',
  'tr': 'Turkey',
  'tm': 'Turkmenistan',
  'tc': 'Turks and Caicos Islands',
  'ug': 'Uganda',
  'ua': 'Ukraine',
  'ae': 'United Arab Emirates',
  'us': 'United States of America',
  'uy': 'Uruguay',
  'uz': 'Uzbekistan',
  've': 'Venezuela',
  'vn': 'Vietnam',
  'ye': 'Yemen',
  'zw': 'Zimbabwe'
};

let itunesCountryOptionsForAppleMusic = [];

const getItunesCountryOptionsForAppleMusic = async () => {
  for (const [countryCode, countryName] of Object.entries(itunesCountries)) {
    try {
      const response = await fetch(`https://rss.itunes.apple.com/api/v1/${countryCode}/apple-music/top-albums/all/1/explicit.json`, {mode: 'no-cors'});

      if (response.status !== 404) {
        console.log('[getItunesCountryOptionsForAppleMusic] current verified country => ', countryName);
        itunesCountryOptionsForAppleMusic = [...itunesCountryOptionsForAppleMusic, {
          label: countryName,
          value: countryCode
        }];
      }
    } catch (error) {
      console.log('[getItunesCountryOptionsForAppleMusic] error => ', error);
    }
  }

  console.log('[getItunesCountryOptionsForAppleMusic] itunesCountryOptionsForAppleMusic => ', JSON.stringify(itunesCountryOptionsForAppleMusic));

  return itunesCountryOptionsForAppleMusic;
};

const getItunesCountryOptions = () => {
  for (const [countryCode, countryName] of Object.entries(itunesCountries)) {
    itunesCountryOptionsForAppleMusic = [...itunesCountryOptionsForAppleMusic, {
      label: countryName,
      value: countryCode
    }];
  }

  console.log('[getItunesCountryOptions] itunesCountryOptionsForAppleMusic => ', JSON.stringify(itunesCountryOptionsForAppleMusic));

  return itunesCountryOptionsForAppleMusic;
};

export {
  getItunesCountryOptionsForAppleMusic,
  getItunesCountryOptions
};
