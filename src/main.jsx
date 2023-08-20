import React from 'react'
import { router } from './routes/Routes';
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AuthProvider from './provider/AuthProvider';

import {


  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Provider } from 'react-redux';
import store from './pages/payment/redux/Store';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>


        <RouterProvider router={router} />


      </AuthProvider>

    </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
