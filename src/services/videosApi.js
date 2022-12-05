import { createApi } from '@reduxjs/toolkit/query/react'
import { platformAuthConfig } from './platformAuthConfig.js'

const videosApi = createApi({
  reducerPath: 'videosApi',
  ...platformAuthConfig(),
  tagTypes: ['Videos'],
  endpoints: builder => ({
    getVideos: builder.query({
      query: () => ({
        url: `/videos`,
        method: 'GET',
      }),
      providesTags: ['Videos']
    }),
    getVideo: builder.query({
      query: (id) => ({
        url: `/videos/${id}`,
        method: 'GET',
      }),
      providesTags: ['Videos']
    })
  })
})


export const {
  useGetVideoQuery,
  useGetVideosQuery
} = videosApi

export default videosApi
