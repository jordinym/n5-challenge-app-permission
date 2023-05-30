import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css'; 
import 'nprogress/nprogress.css';
import App from './App';
import { SidebarProvider } from './components/Contexts/SidebarContext';
import * as serviceWorker from './serviceWorker'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <HelmetProvider>
  <SidebarProvider>
    
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
    </BrowserRouter>
  </SidebarProvider>
</HelmetProvider>
</React.StrictMode>
);

serviceWorker.unregister()
