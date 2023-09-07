// App.js
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import CallApiTest from './Pages/CallApiTest/CallApiTest';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <CallApiTest />
      </div>
    </QueryClientProvider>
  );
}

export default App;
