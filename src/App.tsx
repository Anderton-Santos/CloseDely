import { createBrowserRouter } from "react-router-dom" 

import {Home} from './pages/home'
import {Login} from './pages/login'
import {Input} from './pages/input'
import { Whatsapp } from "./pages/whatsapp"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },

  {
    path: '/home',
    element: <Home/>
  },

  {
    path: '/input',
    element: <Input/>
  },
  {
    path: '/wpp',
    element: <Whatsapp/>
  },
])

export {router}