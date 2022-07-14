import { http } from 'services';
import { responseFormatter } from 'utils';

const post = data => {
  return responseFormatter(http.post('/GetPartnerSetting', data, {
    setAuth: true,
  }));
};

const saveSettings = data => {
  return responseFormatter(http.post('/EditPartnerSetting', data, {
    setAuth: true,
  }));
};

const SettingsService = {
  post,
  saveSettings
};
export default SettingsService;