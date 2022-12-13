import { createApi } from '@reduxjs/toolkit/query/react'
import { platformAuthConfig } from './platformAuthConfig.js'

const verfiyApi = createApi({
  reducerPath: 'verfiyApi',
  ...platformAuthConfig(),
  tagTypes: ['User'],
  endpoints: builder => ({
    verfiyUser: builder.mutation({
      query: () => ({
        url: `/verify`,
        method: 'POST',
      }),
      invalidatesTags: ['User']
    })
  })
})


export const {
  useVerfiyUserMutation,
} = verfiyApi

export default verfiyApi
