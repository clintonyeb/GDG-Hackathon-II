import Axios from 'axios';

function get(url, cb) {
  return Axios.get(url)
    .then(res => cb(null, res.data))
    .catch(err => cb(err));
}

function post(url, data, cb) {
  return Axios.post(url, data)
    .then(response => cb(null, response.data))
    .catch(err => cb(err));
}

export let register = post;
export let login = post;
