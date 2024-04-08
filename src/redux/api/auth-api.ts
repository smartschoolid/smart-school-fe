import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./base-query";
import { LoginInput, LoginSuccess, RegisterInput } from "@/interfaces/auth";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<LoginSuccess, LoginInput>({
      query(data) {
        return {
          url: "/login",
          method: "POST",
          body: data,
        };
      },
    }),
    register: builder.mutation<LoginSuccess, RegisterInput>({
      query(data) {
        return {
          url: "/signup",
          method: "POST",
          body: data,
        };
      },
    }),
    getProfile: builder.query<any, void>({
      query() {
        return {
          url: "/profile",
          method: "GET",
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation, useRegisterMutation, useLazyGetProfileQuery } =
  authApi;
