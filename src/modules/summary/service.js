import { http } from 'services';
import { responseFormatter } from 'utils';

const contractStatus = data => {
  return responseFormatter(http.post('/GetPartnerDeviceContractList', data, {
    setAuth: true,
  }));
};

const optionList = data => {
  return responseFormatter(http.post('/GetEventTimeLineList', data, {
    setAuth: true,
  }));
};

const getSummaryStatus = data => {
  return responseFormatter(http.post('/GetDeviceStatusSummary', data, {
    setAuth: true,
  }));
};

const deleteUser = data => {
  return responseFormatter(http.post('/DeleteUser', data, {
    setAuth: true,
  }));
};

const GetBookmarkList = data => {
  return responseFormatter(http.post('/GetBookmarkList', data, {
    setAuth: true,
  }));
};

const GetEndCustomerDetailDeviceList = data => {
  return responseFormatter(http.post('/GetEndCustomerDetailDeviceList', data, {
    setAuth: true,
  }));
};

const SummaryService = {
  GetEndCustomerDetailDeviceList,
  contractStatus,
  optionList,
  getSummaryStatus,
  deleteUser,
  GetBookmarkList
};
export default SummaryService;