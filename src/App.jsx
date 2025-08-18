import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { Outlet } from "react-router-dom";

function App(){
  return <>
    <Header/>
    <Outlet>
      <MainContent/>
    </Outlet>
  </>
}

export default App;