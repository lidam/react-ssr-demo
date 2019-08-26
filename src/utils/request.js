import axios from 'axios';

export default (baseUrl, headers) => {
  return axios.create({
    baseURL: baseUrl,
    headers: headers ? headers : {}
  });
}