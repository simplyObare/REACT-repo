import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
})
