import tokenService from '../utils/tokenService'

const BASE_URL = '/api/posts/';

export default {
  index
  
};

function index() {
  return fetch(BASE_URL).then(res => res.json());
}




