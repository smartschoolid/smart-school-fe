import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiUrl from "../../config/backend-url";

const baseQuery = fetchBaseQuery({
  baseUrl: apiUrl,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
    "Access-Control-Allow-Origin": "*",
  },
  mode: "cors",
  validateStatus(response) {
    if (response.status === 401) {
      localStorage.removeItem("auth_token");
      window.location.href = "/login";
      return false;
    }

    if (response.status === 200) {
      return true;
    }
    return false;
  },
});

export default baseQuery;
