import { http } from "services";
import { responseFormatter } from "utils";

const post = (data) => {
  return responseFormatter(
    http.post("/GetEndCustomerForWeb", data, {
      setAuth: true,
      removeParterId: !!data.partnerId,
    })
  );
};

const GetEndCustomerDeviceList = (data) => {
  return responseFormatter(
    http.post("/GetEndCustomerDeviceList", data, {
      setAuth: true,
    })
  );
};

const EditEndCustomerName = (data) => {
  return responseFormatter(
    http.post("/EditEndCustomerName", data, {
      setAuth: true,
    })
  );
};

const DeleteCustomer = (data) => {
  return responseFormatter(
    http.post("/DeleteCustomer", data, {
      setAuth: true,
    })
  );
};

const CustomersService = {
  post,
  GetEndCustomerDeviceList,
  EditEndCustomerName,
  DeleteCustomer,
};
export default CustomersService;


