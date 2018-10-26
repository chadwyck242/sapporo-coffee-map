import axios from 'axios';

export function getData(callback) {
  const endPoint = 'https://api.foursquare.com/v2/venues/search?';
  const parameters = {
    client_id: 'PDWWPA3JETVVU0PFEHKW4ZNVCIOXUTV04DNQK02BXQVFRI52',
    client_secret: 'I4NX3Q2FDDFMKCRMNQHYPM41QATFMQ4HZR4JJLMAGMQ13RGT',
    query: 'coffee',
    intent: 'browse',
    radius: '1000',
    ll: '43.0610, 141.3664',
    v: '20181031'
  }

  axios.get(endPoint + new URLSearchParams(parameters))
    .then(res => callback({
      data: res.data.response.venues
    }))
    .catch(err => callback({
      error: err
    }
  ));
}
