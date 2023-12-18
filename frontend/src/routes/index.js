import React from "react";
import pathContants from "./pathConstants";

const Login = React.lazy(()=>import('../pages/Login'))
const SyndicDash = React.lazy(()=>import('../pages/SyndicDash'))
const SuperDash = React.lazy(()=>import('../pages/SuperDash'))
const AdminRoute = React.lazy(()=>import("../components/admin/AdminRoute"))
const SyndicRoute = React.lazy(()=>import("../components/syndic/SyndicRoute"))
const routes = [
    {
        path: pathContants.LOGIN,
        element: <Login />
    },
    {
        path: pathContants.SYNDIC,
        element: <SyndicRoute children={<SyndicDash />} />
    },
    {
        path: pathContants.SUPER,
        element: <AdminRoute children={<SuperDash />} />
    }
]

export default routes