import axios from "axios";

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

const baseURL = `${import.meta.env.VITE_API_BASE_URL}/api`;

const getStorage = () => {
  if (typeof window === "undefined") return null;
  return window.localStorage;
};

export const getAccessToken = () => getStorage()?.getItem(ACCESS_TOKEN_KEY) || "";

export const getRefreshToken = () =>
  getStorage()?.getItem(REFRESH_TOKEN_KEY) || "";

export const setAccessToken = (token) => {
  if (!token) return;
  getStorage()?.setItem(ACCESS_TOKEN_KEY, token);
};

export const setRefreshToken = (token) => {
  if (!token) return;
  getStorage()?.setItem(REFRESH_TOKEN_KEY, token);
};

export const clearAuthTokens = () => {
  const storage = getStorage();
  storage?.removeItem(ACCESS_TOKEN_KEY);
  storage?.removeItem(REFRESH_TOKEN_KEY);
};

export const storeTokens = ({ accessToken, refreshToken }) => {
  if (accessToken) setAccessToken(accessToken);
  if (refreshToken) setRefreshToken(refreshToken);
};

export const storeTokensFromResponse = (responseData) => {
  const accessToken =
    responseData?.accessToken || responseData?.token || responseData?.jwt;
  const refreshToken = responseData?.refreshToken;
  storeTokens({ accessToken, refreshToken });
};

const api = axios.create({
  baseURL,
  timeout: 15000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token && !config.headers?.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

const normalizeApiError = (error) => {
  const status = error?.response?.status || 0;
  const data = error?.response?.data || null;
  const message =
    data?.message ||
    data?.error ||
    error?.message ||
    "Something went wrong. Please try again.";

  return {
    message,
    status,
    data,
    code: error?.code || null,
    isNetworkError: !error?.response,
    originalError: error,
  };
};

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    const skipAuthHandling = error?.config?.skipAuthHandling;

    if (status === 401 && !skipAuthHandling) {
      clearAuthTokens();
    }

    return Promise.reject(normalizeApiError(error));
  },
);

export const request = async ({
  method = "get",
  endpoint,
  data,
  params,
  headers,
  ...config
}) => {
  const response = await api.request({
    method,
    url: endpoint,
    data,
    params,
    headers,
    ...config,
  });
  return response.data;
};

export const apiService = {
  get: (endpoint, config = {}) =>
    request({ method: "get", endpoint, ...config }),
  post: (endpoint, data, config = {}) =>
    request({ method: "post", endpoint, data, ...config }),
  put: (endpoint, data, config = {}) =>
    request({ method: "put", endpoint, data, ...config }),
  patch: (endpoint, data, config = {}) =>
    request({ method: "patch", endpoint, data, ...config }),
  delete: (endpoint, config = {}) =>
    request({ method: "delete", endpoint, ...config }),
};

export default api;
