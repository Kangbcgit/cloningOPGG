// App.js
import React from 'react';
import CallApiTest from './Pages/CallApiTest/CallApiTest';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CallApiTest />
      </div>
    </Provider>
  );
}

export default App;
