import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/index.css'
import App from '../router/App.jsx'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from '../router/Home.jsx';
import { Provider } from 'react-redux';
import myntraCloneStore from "../store/index.js"
import CartDecider from '../components/CartDecider.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/Bag",
        element : <CartDecider/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(

    <Provider store={myntraCloneStore}>
    <RouterProvider router={router}/>
    </Provider>
)
