// App.js
import React, { useEffect, useState } from 'react';
import CallApiTest from './Pages/CallApiTest/CallApiTest';
import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './Pages/Main/index,';
import { current } from '@reduxjs/toolkit';

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
  const [currentDisplaySize, setCurrentDisplaySize] = useState();
  useEffect(() => {
    const currentInnerWidth = window.innerWidth;
    if (!currentInnerWidth < display.desktop) {
      setCurrentDisplaySize(display.desktop);
    } else {
      if (!currentDisplaySize < display.tablet) {
        setCurrentDisplaySize(display.tablet);
      } else {
        setCurrentDisplaySize(display.mobile);
      }
    }
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;