import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import PortfolioDetailsModal from "./components/PortfolioDetailsModal";

function App(){

  const {isDark} = useSelector(store => store.darkMode);

  return <div className={`app ${isDark ? "darkBody" : ""}`}>
    <Header/>
    <Outlet>
      <MainContent/>
      <PortfolioDetailsModal/>
    </Outlet>
  </div>
}

export default App;