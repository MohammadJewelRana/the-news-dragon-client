import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Category/Category";
import NewsLayout from "../Components/Layout/NewsLayout";
import News from "../pages/News/News/News";
import Login from "../Components/LogReg/Login";
import LoginLayout from "../Components/Layout/LoginLayout";
import Registration from "../Components/LogReg/Registration";
 


const router=createBrowserRouter([
  {
    path:'/',
    element:<LoginLayout></LoginLayout>,
    children:[
      {
        path:'/',
        element:<Navigate to='/category/0'></Navigate>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Registration></Registration>
      }
    ]
    
  },
    {
      path:'/category',
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:':id',
          element:<Category></Category>,
          loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)

        }
      ]
    },
    {
      path:'/news',
      element :<NewsLayout></NewsLayout>,
      children:[
        {
          path:':id',
          element:<News></News>,
          loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
        }
    
      ]
    }
  ])

  export default router;