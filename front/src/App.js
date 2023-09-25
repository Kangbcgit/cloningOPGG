// App.js
import React, { useEffect, useState } from 'react';
import CallApiTest from './Pages/CallApiTest';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/store';
import Main from './Pages/Main';
import { current } from '@reduxjs/toolkit';
import componentDidMount from './redux/action/currentInnerWidth';

const display = {
  mobile: 430,
  tablet: 1024,
  desktop: 1920,
}
// const media = {
//   mobile: `(max-width: ${display.mobile}px)`,
//   tablet: `(max-width: ${display.tablet}px)`,
//   desktop: `(max-width: ${display.desktop}px)`
// }
function App() {
  const currentMedia = useSelector(state => state.currentInnerWidth.currentDisplay)
  const dispatch = useDispatch();
  const calcInnerWidth = async () => {
    await dispatch(componentDidMount.calcCurrentInnerWidth());
  }
  useEffect(() => {
    calcInnerWidth();
    window.addEventListener('resize', calcInnerWidth);
  }, [])
  useEffect(() => {
    console.log('현재 innerWidth는 ',currentMedia.CurrentInnerWidth, 'px 입니다');
  }, [currentMedia])
  return (
    <>
      {<Main />}
      
    </>
  );
}

export default App;