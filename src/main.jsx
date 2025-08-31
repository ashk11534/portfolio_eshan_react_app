import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Portfolio from './components/Portfolio.jsx'
import About from './components/About.jsx'
import MainContent from './components/MainContent.jsx'
import portfolioStore from './store/index.js'
import PortfolioDetailsModal from './components/PortfolioDetailsModal.jsx'
import Achievements from './components/Achievements.jsx'

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
          {path: "/about", element: <About/>},
          {path: "/achievements", element: <Achievements/>},
        ]
      },
      
      {
        path: "/project-details/:project_id", 
        element: <PortfolioDetailsModal/>
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
