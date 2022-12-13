import { configureStore } from '@reduxjs/toolkit'
import userStateReducer from './userSlice'
import videosApi from '../services/videosApi'
import verfiyApi from '../services/verifyApi'

export const store = configureStore({
  reducer: {
    [userStateReducer.name]: userStateReducer.reducer,
    [videosApi.reducerPath]: videosApi.reducer,
    [verfiyApi.reducerPath]: verfiyApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
    videosApi.middleware,
    verfiyApi.middleware
  )
})
