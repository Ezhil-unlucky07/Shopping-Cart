import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { ViewCart } from './ViewCart.jsx'
import Productdetail from './productdetail.jsx'
import store from './cartslice.jsx'
import {Provider} from "react-redux"


const route = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/ViewCart",
    element:<ViewCart/>
  },
  {
    path:"/product/:id",
    element:<Productdetail/>
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
     <RouterProvider router={route} />
    </Provider>
     {/* <App /> */}
  </StrictMode>,
)
