import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { createRoot } from "react-dom/client";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Main from './main';
import Aside from './aside';

import Basic from './layout/basic';
import Single from './single';

import Profile from './route/profile';



const feather = require('feather-icons');

setTimeout ( () => {
    feather.replace();
}, 1);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Basic />,
        children: [
            {
                path: '',
                element: <>
                    <div>
                        <Main></Main>
                    </div>
                    <div>
                        <Aside></Aside>
                    </div>
                </>
            },
            {
                path: '/perfil',
                element: <Profile />,
            },
            {
                path: '/:slug',
                element: <Single />,
            },
        ],
    },
]);

const root = createRoot(document.getElementById("root"));
root.render (
    <RouterProvider router={router} />
);