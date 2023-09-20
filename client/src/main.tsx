import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import queryClient from './utils/queryClient.ts';
import { QueryClientProvider } from '@tanstack/react-query';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
      <Toaster />
    </>
  </React.StrictMode>
);
