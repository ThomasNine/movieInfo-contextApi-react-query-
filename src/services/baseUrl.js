import { ApiKey, ApiUrl } from "../lib/constant";
import axios from "axios";

export const api = axios.create({
  baseURL: ApiUrl,
  params: {
    api_key: ApiKey,
  },
});
