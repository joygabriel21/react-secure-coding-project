import axios from "axios";

const getBackendUrl = "http://localhost:8080";

const API = (() => {
  return {
    get: (path, param) => axios.get(`${getBackendUrl}${path}`, param),
    delete: (path, param) => axios.delete(`${getBackendUrl}${path}`, param),
    post: (path, param) => axios.post(`${getBackendUrl}${path}`, param),
    put: (path, param) => axios.put(`${getBackendUrl}${path}`, param),
  };
})();

export default { API, getBackendUrl };
