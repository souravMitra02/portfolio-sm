import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router";
import { router } from './router/router.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    once: false,
  });
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
        <App />
  </RouterProvider>
  </StrictMode>,
)
