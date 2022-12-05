import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const {
  NODE_ENV,
  REACT_APP_BASE_API_URL,
  REACT_APP_GLOBAL_KEY,
} = process.env;

export const platformAuthConfig = () => {

  return {
    baseQuery: fetchBaseQuery({
      baseUrl: NODE_ENV === "development" ? "http://127.0.0.1:8000/" : REACT_APP_BASE_API_URL,
      prepareHeaders: (headers, { getState }) => {
        headers.set("authorization", `Bearer ${getState().userState.platformBearer}`);
        // console.log(getState().userState.platformBearer);
        return headers;
      },
    }),
  };
};

export default platformAuthConfig;
