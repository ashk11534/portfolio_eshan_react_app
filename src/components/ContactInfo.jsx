import styles from "../assets/css/ContactInfo.module.css";
import { LiaDownloadSolid } from "react-icons/lia";

function ContactInfo(){
    return <div className={`${styles.contactInfo} mt-4`}>
        <button className={styles.downloadCVBtn}>Download CV <LiaDownloadSolid size={18}/></button>
        <div className={styles.contactIconContainer}>
            <img src="images/gmail.png"/>
        </div>
        <div className={styles.contactIconContainer}>
            <img src="images/linkedin.png"/>
        </div>
    </div>;
}

export default ContactInfo;