import { http } from 'services';
import { responseFormatter } from 'utils';

const post = data => {
  return responseFormatter(http.post('/GetUserList', data, {
    setAuth: true,
  }));
};

const addUser = data => {
  return responseFormatter(http.post('/AddUser', data, {
    setAuth: true,
  }));
};

const editUser = data => {
  return responseFormatter(http.post('/EditUser', data, {
    setAuth: true,
  }));
};

const deleteUser = data => {
  return responseFormatter(http.post('/DeleteUser', data, {
    setAuth: true,
  }));
};

const approveUser = data => {
  return responseFormatter(http.post('/ApproveUser', data, {
    setAuth: true,
  }));
};

const UsersService = {
  post,
  addUser,
  editUser,
  deleteUser,
  approveUser,
};
export default UsersService;