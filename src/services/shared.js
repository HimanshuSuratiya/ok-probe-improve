import { http } from 'services';
import { responseFormatter } from 'utils';

const getDeviceList = data => {
  return responseFormatter(http.post('/GetEndCustomerDetailDeviceListForWeb', data, {
    setAuth: true,
  }));
};

const GetUnassignDeviceCount = data => {
  return responseFormatter(http.post('/GetUnassignDeviceCount', data, {
    setAuth: true,
  }));
};

const GetWaitDeviceCount = data => {
  return responseFormatter(http.post('/GetWaitDeviceCount', data, {
    setAuth: true,
  }));
};

const SharedService = {
  getDeviceList,
  GetUnassignDeviceCount,
  GetWaitDeviceCount
};

export default SharedService;