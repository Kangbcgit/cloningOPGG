// App.js
import React, { useEffect, useState } from 'react';
import CallApiTest from './Pages/CallApiTest';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/store';
import Main from './Pages/Main';
import { current } from '@reduxjs/toolkit';
import componentDidMount from './redux/action/currentInnerWidth';
import { Route, Routes } from 'react-router-dom';
import SummonerInfo from './Pages/SummonerInfo';

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
  const [isLoadPage, setLoadPage] = useState(false);

  const calcInnerWidth = async () => {
    await dispatch(componentDidMount.calcCurrentInnerWidth());
  }
  useEffect(() => {
    calcInnerWidth();
    window.addEventListener('resize', calcInnerWidth);
    setLoadPage(false);
  }, [])
  useEffect(() => {
    console.log('현재 innerWidth는 ',currentMedia.currentInnerWidth, 'px 입니다');
    setLoadPage(true);
  }, [currentMedia])
  return (
    <>
    <Routes>
      <Route path='/' element={<>{isLoadPage ? <Main /> : null}</>}/>
      <Route path='/SummonerInfo/:name' element={<SummonerInfo />} />
    </Routes>
    </>
  );
}

export default App;