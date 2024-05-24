import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import PatientProfile from "../pages/Patient profile/Patient Profile/PatientProfile";
import Login from "../pages/Authentication/Login/Login";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/profile',
          element:<PatientProfile></PatientProfile>
        },
        {
          path:'/login',
          element: <Login></Login>
        }
      ]
    },
  ]);