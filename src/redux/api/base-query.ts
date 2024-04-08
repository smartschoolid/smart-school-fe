import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "/api",
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
