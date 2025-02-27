import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/api" }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/products`,
      providesTags: ["Product"],
    }),
    addProduct: builder.mutation({
      query: (body) => ({
        url: `/product`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useAddProductMutation } = baseApi;
