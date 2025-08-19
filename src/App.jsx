import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function App(){

  const {isDark} = useSelector(store => store.darkMode);

  return <div className={`app ${isDark && "darkBody"}`}>
    <Header/>
    <Outlet>
      <MainContent/>
    </Outlet>
  </div>
}

export default App;