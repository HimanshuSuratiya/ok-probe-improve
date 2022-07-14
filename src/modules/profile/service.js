import { http, frontendApiInstance } from "services";
import { responseFormatter } from "utils";

const post = (data) => {
  return responseFormatter(
    http.post("/GetUser", data, {
      setAuth: true,
    })
  );
};

const saveSettings = (data) => {
  return responseFormatter(
    http.post("/EditUser", data, {
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

const ProfileService = {
  post,
  saveSettings,
  uploadAvtar,
};
export default ProfileService;
