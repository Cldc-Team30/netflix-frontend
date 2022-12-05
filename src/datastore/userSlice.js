import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  platformBearer: undefined,
}

export const userSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    setPlatformBearer: (state, action) => {
      state.platformBearer = action.payload
    }
  }
})

export const {
    setPlatformBearer
} = userSlice.actions

export default userSlice
