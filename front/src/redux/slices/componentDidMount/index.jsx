import { createSlice } from '@reduxjs/toolkit'

const mountSlice = createSlice({
  name: 'componentDidMount',
  initialState: {
    currentInnerWidth: 0,
  },
  reducers: {
    setInnerWidth: (state, action) => {
      console.log()
    }
  }
});

export default mountSlice