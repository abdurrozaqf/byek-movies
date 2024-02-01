import axios from "axios";

interface Queries {
  api_key?: string;
  language: string;
  session_id?: string;
}

let session_id = "";
const axiosWithConfig = axios.create();

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const setAxiosConfig = (token: string) => {
  session_id = token;
};

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  let queries: Queries = {
    api_key: API_KEY,
    language: "en-US",
  };

  if (session_id !== "") {
    queries["session_id"] = session_id;
  }

  axiosConfig.baseURL = BASE_URL;
  axiosConfig.params = {
    ...axiosConfig.params,
    ...queries,
  };

  return axiosConfig;
});

export default axiosWithConfig;
