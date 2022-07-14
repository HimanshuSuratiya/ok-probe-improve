import { http } from 'services';
import { responseFormatter } from 'utils';

const GetUnassignDeviceList=(data)=>{
  return responseFormatter(http.post('/GetUnassignDeviceList', data, {
    setAuth: true,
  }));
}


const GetDeviceInfoForWeb=(data)=>{
  return responseFormatter(http.post('/GetDeviceInfoForWeb', data, {
    setAuth: true,
  }));
}

const GetEndCustomerSearchList=(data)=>{
  return responseFormatter(http.post('/GetEndCustomerSearchList', data, {
    setAuth: true,
  }));
}


const UpdateDeviceForWeb=(data)=>{
  return responseFormatter(http.post('/UpdateDeviceForWeb', data, {
    setAuth: true,
    removeParterId: true,
  }));
}

const UpdateDeviceStatus=(data)=>{
  return responseFormatter(http.post('/UpdateDeviceStatus', data, {
    setAuth: true,
  }));
}

const DeleteDevice=(data)=>{
  return responseFormatter(http.post('/DeleteDevice', data, {
    setAuth: true,
  }));
}

const AddCustomer=(data)=>{
  return responseFormatter(http.post('/AddCustomer', data, {
    setAuth: true,
  }));
}



const UsersService = {
  GetUnassignDeviceList,
  GetEndCustomerSearchList,
  GetDeviceInfoForWeb,
  UpdateDeviceForWeb,
  DeleteDevice,
  UpdateDeviceStatus,
  AddCustomer
};
export default UsersService;