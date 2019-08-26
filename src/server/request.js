import request from '../utils/request';

export default (req) => {
  return request(
    'http://apidev.xin.com/mock/5d637b4e04e2fb0008f9ac33/', {
    cookie: {
      cookie: req.cookie || ''
    }
  }
)}