import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { createRoot } from "react-dom/client";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Aside from './aside';

import Basic from './layout/basic';
import Single from './single';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Basic />,
        children: [
            {
                path: '',
                element: <>
                    <div className='col-md-4'>
                        <Aside></Aside>
                    </div>
                    <div className='col-md-4'>

                    </div>
                    <div className='col-md-4'>

                    </div>
                </>
            },
            {
                path: "detalle/:slug",
                element: <Single />,
            },
        ],
    },
]);

const root = createRoot(document.getElementById("root"));
root.render (
    <RouterProvider router={router} />
);