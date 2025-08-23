import { Outlet } from "react-router-dom";
import styles from "../assets/css/MainContent.module.css";
import About from "./About";
import ContactInfo from "./ContactInfo";
import Experiences from "./Experiences";
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import Tabs from "./Tabs";
import PortfolioDetailsModal from "./PortfolioDetailsModal";

function MainContent(){
    return (
        <div className="container" style={{paddingTop: "70px", paddingBottom: "70px", display: 'flex', justifyContent: 'center'}}>
            <div className={styles.mainContent}>
                <Intro/>
                <Experiences/>
                <ContactInfo/>
                <Tabs/>
                <Outlet>
                    <Portfolio/>
                    <About/>
                    <PortfolioDetailsModal/>
                </Outlet>
            </div>
        </div>
    );
}

export default MainContent;