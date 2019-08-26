import { GET_DOWNLOAD_LIST } from './constants';

const getList = (list) => ({
  type: GET_DOWNLOAD_LIST,
  list
})

export const getDownloadList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.post('/jianshu/download/list').then(res => {
      const { data: { code, data }} = res;
      if(code === 200){
        dispatch(getList(data));
      }
    })
  }
}