import styles from "../assets/css/ContactInfo.module.css";
import { LiaDownloadSolid } from "react-icons/lia";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

function ContactInfo(){
    const [basicConf, setBasicConf] = useState({})
    const [resume, setResume] = useState({})
        
    useEffect(() => {
        async function fetch_basic_configuration() {
            const response = await fetch("http://127.0.0.1:8000/basic-configuration");
            const data = await response.json();

            setBasicConf(data.basic_conf);

            console.log(data.basic_conf)
        }

        fetch_basic_configuration()

    }, [])

    useEffect(() => {
        async function fetch_resume() {
            const response = await fetch("http://127.0.0.1:8000/resume");
            const data = await response.json();

            setResume(data.resume);

            console.log(data.resume)
        }

        fetch_resume()

    }, [])

    return <div className={`${styles.contactInfo} mt-4`}>
        <a href={resume.resume_file} className={styles.downloadCVBtn} style={{textDecoration: "none", color: "#333"}}>Download Resume <LiaDownloadSolid size={18}/></a>
        <a href={basicConf.gmail_link} className={styles.contactIconContainer} style={{textDecoration: "none", color: "#333"}}>
            <CgMail size={20}/>
        </a>
        <a href={basicConf.linkedin_link} className={styles.contactIconContainer} style={{textDecoration: "none", color: "#333"}}>
            <FaLinkedin size={20}/>
        </a>
    </div>;
}

export default ContactInfo;