import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/home.jsx';  
import About from './pages/about.jsx';  
import Contact from './pages/contact.jsx';  
import Blogsection from './pages/blog.jsx';
import Blog_details from './pages/blog _description.jsx';


let allroutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "about-us",
    element: <About />,
  },

  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "blog",
    element: <Blogsection />,
  },
  {
    path: "blog/:id",
    element: <Blog_details />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={allroutes} />
  </StrictMode>,
)
