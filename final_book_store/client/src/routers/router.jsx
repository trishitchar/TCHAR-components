import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashBoardLayout from "../dashboard/DashBoardLayout";
import DashBoard from "../dashboard/DashBoard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import DeleteBook from "../dashboard/DeleteBook";
import EditBook from "../dashboard/EditBook";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },{
          path:"/shop",
          element:<Shop/>
        },{
          path:"/about",
          element:<About/>
        },{
          path:"/blog",
          element:<Blog/>
        },{
          path:"/books/:id",
          element:<SingleBook/>,
          loader:({params}) => fetch(`http://localhost:5000/books/${params.id}`)
        }
      ]
    },{
      path:"/admin/dashboard",
      element:<DashBoardLayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element:<DashBoard/>
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBook/>
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBook/>
        },
        {
          path:"/admin/dashboard/delete",
          element:<DeleteBook/>
        },
        {
          path:"/admin/dashboard/edit/:id",
          element:<EditBook/>,
          loader:({params}) => fetch(`http://localhost:5000/books/${params.id}`)
        },
      ]
    }
  ]);

  export default router