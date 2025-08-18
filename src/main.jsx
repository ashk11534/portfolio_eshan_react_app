import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Portfolio from './components/Portfolio.jsx'
import About from './components/About.jsx'
import MainContent from './components/MainContent.jsx'
import portfolioStore from './store/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/", 
        element: <MainContent/>, 
        children: [
          {path: "/", element: <Portfolio/>},
          {path: "/about", element: <About/>}
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={portfolioStore}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
