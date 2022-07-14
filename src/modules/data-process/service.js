import { http } from 'services';
import { responseFormatter } from 'utils';

const post = data => {
  return responseFormatter(http.post('/GetMailLogList', data, {
    setAuth: true,
  }));
};

const DataProcessService = {
  post,
};
export default DataProcessService;