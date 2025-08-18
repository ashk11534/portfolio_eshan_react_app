import styles from "../assets/css/ContactInfo.module.css";
import { LiaDownloadSolid } from "react-icons/lia";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";

function ContactInfo(){
    return <div className={`${styles.contactInfo} mt-4`}>
        <button className={styles.downloadCVBtn}>Download CV <LiaDownloadSolid size={18}/></button>
        <div className={styles.contactIconContainer}>
            <CgMail size={20}/>
        </div>
        <div className={styles.contactIconContainer}>
            <FaLinkedin size={20}/>
        </div>
    </div>;
}

export default ContactInfo;