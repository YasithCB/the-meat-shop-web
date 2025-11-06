import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";

import { router } from './Routes/Routes.jsx';
import "slick-carousel/slick/slick.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';

import './assets/main.css';
import Context from './context/Context.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Context>
            <RouterProvider router={router} />
        </Context>
    </StrictMode>,
);