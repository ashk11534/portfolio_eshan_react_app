import styles from "../assets/css/ContactInfo.module.css";
import { LiaDownloadSolid } from "react-icons/lia";
import { FaUpwork } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useEffect, useState } from "react";

function ContactInfo(){
    const [basicConf, setBasicConf] = useState({})
    const [resume, setResume] = useState({})
        
    useEffect(() => {
        async function fetch_basic_configuration() {
            const response = await fetch("https://akibeshan.pythonanywhere.com/basic-configuration");
            const data = await response.json();

            setBasicConf(data.basic_conf);
        }

        fetch_basic_configuration()

    }, [])

    useEffect(() => {
        async function fetch_resume() {
            const response = await fetch("https://akibeshan.pythonanywhere.com/resume");
            const data = await response.json();

            setResume(data.resume);
        }

        fetch_resume()

    }, [])

    return <div className={`${styles.contactInfo} mt-4`}>
        <a href={resume.resume_file} className={styles.downloadCVBtn} style={{textDecoration: "none", color: "#333"}}>Download Resume <LiaDownloadSolid size={18}/></a>
        <a href={basicConf.gmail_link} className={styles.contactIconContainer} style={{textDecoration: "none", color: "#333"}}>
            <FaUpwork size={20}/>
        </a>

        <a href={basicConf.linkedin_link} className={styles.contactIconContainer} style={{textDecoration: "none", color: "#333"}}>
            <FaLinkedin size={20}/>
        </a>

        <a href={basicConf.youtube_link} className={styles.contactIconContainer} style={{textDecoration: "none", color: "#333"}}>
            <FaYoutube size={20}/>
        </a>

        <a href={basicConf.instagram_link} className={styles.contactIconContainer} style={{textDecoration: "none", color: "#333"}}>
            <FaInstagram size={20}/>
        </a>

        <a href={basicConf.github_link} className={styles.contactIconContainer} style={{textDecoration: "none", color: "#333"}}>
            <FaGithub size={20}/>
        </a>
    </div>;
}

export default ContactInfo;