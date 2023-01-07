import http from "../http-common";

class DataService {
  get(url) {
    return http.get(`/shorten?url=${url}`);
  }
}

export default new DataService();