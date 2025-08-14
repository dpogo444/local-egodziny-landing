import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './pages/App';
import Privacy from './pages/Privacy';
import NotReady from './pages/NotReady';
import Blog from './pages/Blog';
import SingleBlogPost from './pages/SingleBlogPost';
import EditBlogPost from './pages/EditBlogPost';
import BlogLoginPage from './pages/BlogLoginPage';
import AutoRegisterForm from './pages/AutoRegisterForm';
import reportWebVitals from './reportWebVitals';
import Clarity from '@microsoft/clarity';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analyticsInstance = getAnalytics(firebaseApp);
const clarityProjectId = process.env.REACT_APP_CLARITY_PROJECT_ID.trim();
if (!clarityProjectId) {
  console.warn("Clarity project ID is not set.");
} else {
  Clarity.init(clarityProjectId);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/upss",
    element: <NotReady />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:id",
    element: <SingleBlogPost />,
  },
  {
    path: "/edit/:id",
    element: <EditBlogPost  />,
  },
  {
    path: "/login/blog",
    element: <BlogLoginPage   />,
  },
  {
    path: "/auto-register",
    element: <AutoRegisterForm />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
