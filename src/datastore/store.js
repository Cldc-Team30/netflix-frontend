import { configureStore } from '@reduxjs/toolkit'
import userStateReducer from './userSlice'
import videosApi from '../services/videosApi'

export const store = configureStore({
  reducer: {
    [userStateReducer.name]: userStateReducer.reducer,
    [videosApi.reducerPath]: videosApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
    videosApi.middleware,
  )
})
