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
import ProtectedRoute from './Component/ProtectedRoute';
import Error from './Component/Error';
import Countries from './Component/Countries';
import CountryDetails from './Component/CountryDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
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
        element: <ProtectedRoute>
          <AddTouristSpot></AddTouristSpot>,
        </ProtectedRoute>
      },
      {
        path: "/myList",
        element: <ProtectedRoute>
          <MyList></MyList>
        </ProtectedRoute>,
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
        element: <ProtectedRoute>
          <SpotDetails></SpotDetails>,
        </ProtectedRoute>
      },
      {
        path: "/viewdetails/:id",
        element: <ProtectedRoute>
          <ViewDetails></ViewDetails>
        </ProtectedRoute>,
        loader: () => fetch("https://tourism-management-server.vercel.app/AddTouristSpot")
      },
      {
        path: "/countrydetails",
        element: <CountryDetails></CountryDetails>,
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
