import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import PortfolioDetailsModal from "./components/PortfolioDetailsModal";
import ContactMeModal from "./components/ContactMeModal";

function App(){

  const {isDark} = useSelector(store => store.darkMode);

  const {isVisible} = useSelector(store => store.contactForm);

  return <div className={`app ${isDark ? "darkBody" : ""}`}>
    <Header/>
    <Outlet>
      <MainContent/>
      <PortfolioDetailsModal/>
    </Outlet>
    {isVisible && <ContactMeModal/>}
  </div>
}

export default App;