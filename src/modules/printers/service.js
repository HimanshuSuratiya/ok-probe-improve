import { http ,frontendApiInstance} from "services";
import { responseFormatter } from "utils";

const post = (data) => {
  return responseFormatter(
    http.post("/GetEndCustomerDetailDeviceListForWeb", data, {
      setAuth: true,
    })
  );
};

const GetPartnerSetting = (data) => {
  return responseFormatter(
    http.post("/GetPartnerSetting", data, {
      setAuth: true,
    })
  );
};

const GetDeviceSimplePaperUsage = (data) => {
  return responseFormatter(
    http.post("/GetDeviceSimplePaperUsage", data, {
      setAuth: true,
    })
  );
};
const GetDeviceTrayList = (data) => {
  return responseFormatter(
    http.post("/GetDeviceTrayList", data, {
      setAuth: true,
    })
  );
};

const GetDeviceInfoForWeb = (data) => {
  return responseFormatter(
    http.post("/GetDeviceInfoForWeb", data, {
      setAuth: true,
    })
  );
};

const GetDevicePaperUsage2 = (data) => {
  return responseFormatter(
    http.post("/GetDevicePaperUsage2", data, {
      setAuth: true,
    })
  );
};

const GetDeviceMemoList = (data) => {
  return responseFormatter(
    http.post("/GetDeviceMemoList", data, {
      setAuth: true,
    })
  );
};

const DeleteDeviceMemo = (data) => {
  return responseFormatter(
    http.post("/DeleteDeviceMemo", data, {
      setAuth: true,
    })
  );
};

const AddDeviceMemo = (data) => {
  return responseFormatter(
    http.post("/AddDeviceMemo", data, {
      setAuth: true,
    })
  );
};

const GetEventList = (data) => {
  return responseFormatter(
    http.post("/GetEventList", data, {
      setAuth: true,
    })
  );
};

const GetDeviceConsumableLevel = (data) => {
  return responseFormatter(
    http.post("/GetDeviceConsumableLevel", data, {
      setAuth: true,
    })
  );
};

const GetDeviceConsumable = (data) => {
  return responseFormatter(
    http.post("/GetDeviceConsumable", data, {
      setAuth: true,
    })
  );
};

const GetDeviceConsumableDetail = (data) => {
  return responseFormatter(
    http.post("/GetDeviceConsumableDetail", data, {
      setAuth: true,
    })
  );
};

const GetDeviceConsumableChangeHistory = (data) => {
  return responseFormatter(
    http.post("/GetDeviceConsumableChangeHistory", data, {
      setAuth: true,
    })
  );
};
const UpdateDeviceForWeb = (data) => {
  return responseFormatter(
    http.post("/UpdateDeviceForWeb", data, {
      setAuth: true,
    })
  );
};

const AddCustomer = (data) => {
  return responseFormatter(
    http.post("/AddCustomer", data, {
      setAuth: true,
    })
  );
};
const DeleteDevice = (data) => {
  return responseFormatter(
    http.post("/DeleteDevice", data, {
      setAuth: true,
    })
  );
};

const GetDeviceSearchList = (data) => {
  return responseFormatter(
    http.post("/GetDeviceSearchList", data, {
      setAuth: true,
    })
  );
};
const GetEndCustomerSearchList = (data) => {
  return responseFormatter(
    http.post("/GetEndCustomerSearchList", data, {
      setAuth: true,
    })
  );
};

const GetDeviceGraphData = (data) => {
  return responseFormatter(
    http.post("/GetDeviceGraphData", data, {
      setAuth: true,
    })
  );
};

const GetDeviceReportData = (data) => {
  return responseFormatter(
    http.post("/GetDeviceReportData", data, {
      setAuth: true,
    })
  );
};

const SaveReport = (data) => {
  return responseFormatter(
    http.post("/SaveReport", data, {
      setAuth: true,
    })
  );
};

const GetSaveReport = (data) => {
  return responseFormatter(
    http.post("/GetSaveReport", data, {
      setAuth: true,
    })
  );
};

const SendReport = (data) => {
  return responseFormatter(
    http.post("/SendReport", data, {
      setAuth: true,
    })
  );
};

const DeleteBookmark = (data) => {
  return responseFormatter(
    http.post("/DeleteBookmark", data, {
      setAuth: true,
    })
  );
};

const AddBookmark = (data) => {
  return responseFormatter(
    http.post("/AddBookmark", data, {
      setAuth: true,
    })
  );
};

const uploadAvtar = (data) => {
  return responseFormatter(
    frontendApiInstance.post("/upload", data, {
      setAuth: true,
    })
  );
};

const GetDeviceContractHistory = (data) => {
  return responseFormatter(
    http.post("/GetDeviceContractHistory", data, {
      setAuth: true,
    })
  );
};


const UsersService = {
  AddBookmark,
  DeleteBookmark,
  GetSaveReport,
  SaveReport,
  GetDeviceReportData,
  GetDeviceGraphData,
  GetDeviceSearchList,
  GetEndCustomerSearchList,
  post,
  GetPartnerSetting,
  GetDeviceSimplePaperUsage,
  GetDeviceTrayList,
  GetDeviceInfoForWeb,
  GetDevicePaperUsage2,
  GetDeviceMemoList,
  DeleteDeviceMemo,
  AddDeviceMemo,
  GetEventList,
  GetDeviceConsumableLevel,
  GetDeviceConsumable,
  GetDeviceConsumableDetail,
  GetDeviceConsumableChangeHistory,
  UpdateDeviceForWeb,
  AddCustomer,
  DeleteDevice,
  SendReport,
  uploadAvtar,
  GetDeviceContractHistory
};
export default UsersService;
