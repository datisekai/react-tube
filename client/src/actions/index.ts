import axios, { AxiosResponse } from "axios";

export const BASE_URL = import.meta.env.BASE_URL;

export const SERVER_URL = BASE_URL + "/api";



const UPLOAD_NAME = import.meta.env.UPLOAD_NAME;
const UPLOAD_PRESET = import.meta.env.UPLOAD_PRESET;

export const server = axios.create({
  baseURL: SERVER_URL,
});

const upload = axios.create({
  baseURL: `https://api.cloudinary.com/v1_1/${UPLOAD_NAME}/image/upload`,
});

export const uploadCloudinary = async (file: File) => {
  const formData = new FormData();
  formData.append('file',file);
  formData.append('upload_preset',UPLOAD_PRESET as string);
  const imageData = await upload.post('/',formData);
  return imageData.data.url;
};

server.interceptors.request.use((config: any) => {
  if (config.url?.indexOf("auth") !== -1) {
    return config;
  }

  if (!config?.headers) {
    throw new Error(
      `Expected 'config' and 'config.headers' not to be undefined`
    );
  }


//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

  return config;
});

server.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    console.log(error);
    if (error?.response?.status === 401 || error?.response?.status === 500) {
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error?.response?.data);
  }
);