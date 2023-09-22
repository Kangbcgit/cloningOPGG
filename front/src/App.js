// App.js
import React from 'react';
import CallApiTest from './Pages/CallApiTest/CallApiTest';
import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './Pages/Main/index,';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
