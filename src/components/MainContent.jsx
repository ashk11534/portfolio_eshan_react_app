import { Outlet } from "react-router-dom";
import styles from "../assets/css/MainContent.module.css";
import About from "./About";
import ContactInfo from "./ContactInfo";
import Experiences from "./Experiences";
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import Tabs from "./Tabs";
import Achievements from "./Achievements";
import SuccessAlert from "./SuccessAlert";
import { useSelector } from "react-redux";

function MainContent(){
    const {isVisible} = useSelector(store => store.successAlert);

    return (
        <div className="container" style={{paddingTop: "70px", paddingBottom: "70px", display: 'flex', justifyContent: 'center'}}>
            <div className={styles.mainContent}>
                {isVisible && <SuccessAlert alertMessage="Message Sent Successfully"/>}
                <Intro/>
                <Experiences/>
                <ContactInfo/>
                <Tabs/>
                <Outlet>
                    <Portfolio/>
                    <About/>
                    <Achievements/>
                </Outlet>
            </div>
        </div>
    );
}

export default MainContent;