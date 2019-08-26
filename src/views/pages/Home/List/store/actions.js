import { GET_HOME_LIST } from './constants';

const getList = (list) => {
  return {
    type: GET_HOME_LIST,
    list
  }
}

export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.post('/jianshu/home/list').then(res => {
      const { data: { code, data }} = res;
      if(code === 200){
        dispatch(getList(data));
      }
    })
  }
}