import { http } from 'services';
import { responseFormatter } from 'utils';

const post = data => {
  return responseFormatter(http.post('/GetNoticeList', data, {
    setAuth: true,
  }));
};

const LastNoticeService = {
  post,
};
export default LastNoticeService;