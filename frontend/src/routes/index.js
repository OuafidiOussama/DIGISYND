import React from "react";
import pathContants from "./pathConstants";

const Login = React.lazy(()=>import('../pages/Login'))
const SyndicDash = React.lazy(()=>import('../pages/SyndicDash'))
const SuperDash = React.lazy(()=>import('../pages/SuperDash'))

const routes = [
    {
        path: pathContants.LOGIN,
        element: <Login />
    },
    {
        path: pathContants.SYNDIC,
        element: <SyndicDash />
    },
    {
        path: pathContants.SUPER,
        element: <SuperDash />
    }
]

export default routes