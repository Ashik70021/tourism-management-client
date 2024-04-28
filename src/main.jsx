import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Component/Home';
import Root from './Component/Root';
import AllTouristSpot from './Component/AllTouristSpot';
import AddTouristSpot from './Component/AddTouristSpot';
import MyList from './Component/MyList';
import AuthProvider from './Component/AuthProvider';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import SpotDetails from './Component/SpotDetails';
import ViewDetails from './Component/ViewDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allTouristSpot",
        element: <AllTouristSpot></AllTouristSpot>,
      },
      {
        path: "/AddTouristSpot",
        element: <AddTouristSpot></AddTouristSpot>,
      },
      {
        path: "/myList",
        element: <MyList></MyList>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/spots/:id",
        element: <SpotDetails></SpotDetails>,
      },
      {
        path: "/viewdetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch("https://tourism-management-server.vercel.app/AddTouristSpot")
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
