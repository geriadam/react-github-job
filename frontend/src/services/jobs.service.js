import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/jobs/";

class JobsService {
  getJobLists() {
    return axios.get(API_URL, { headers: authHeader() });
  }

  getJobDetail(id) {
    return axios.get(API_URL + "/" + id, { headers: authHeader() });
  }
}

export default new JobsService();