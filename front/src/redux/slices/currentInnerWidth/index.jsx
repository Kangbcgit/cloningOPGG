import { createSlice, current } from '@reduxjs/toolkit'

const display = {
  mobile: 430,
  tablet: 1024,
  desktop: 1920,
};
const setMedia = (innerWidth) => {
  if (!innerWidth < display.desktop) {
    return 'desktop';
  } else {
    if (!innerWidth < display.tablet) {
      return 'tablet';
    } else {
      return 'mobile';
    }
  }
}
const currentInnerWidth = createSlice({
  name: 'currentInnerWidth',
  initialState: {
    currentDisplay: {

    },
  },
  reducers: {
    setInnerWidth: (state, action) => {
      state.currentDisplay = {... state.currentDisplay,
        currentInnerWidth: action.payload.currentInnerWidth,
        currentMedia: setMedia(action.payload.currentInnerWidth),
        headerImgToggle: action.payload.currentInnerWidth <= display.tablet,
      };
    }
  }
});

export default currentInnerWidth