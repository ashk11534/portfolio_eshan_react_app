import styles from "../assets/css/MainContent.module.css";
import ContactInfo from "./ContactInfo";
import Experiences from "./Experiences";
import Intro from "./Intro";

function MainContent(){
    return (
        <div className="container" style={{paddingTop: "70px", display: 'flex', justifyContent: 'center'}}>
            <div className={styles.mainContent}>
                <Intro/>
                <Experiences/>
                <ContactInfo/>
            </div>
        </div>
    );
}

export default MainContent;