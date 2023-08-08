import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import{ 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider, { AuthContext } from './Provider/AuthProvider';
import router from './routes/Route';

 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  

  <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
  </AuthProvider>

  </React.StrictMode>,
)
