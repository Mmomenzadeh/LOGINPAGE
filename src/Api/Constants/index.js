import axios from "axios";
import { BASE_URL } from "../../Config/ServiceConstant/BaseUrl";

export const HttpService = axios.create({
    baseURL: BASE_URL,
    timeout: 80000,
  });
  