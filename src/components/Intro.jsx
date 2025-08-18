import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import styles from '../assets/css/Intro.module.css';

function Intro(){
    return (
        <div className={styles.Intro}>
            <div className={styles.userImageContainer}>
                <img src="images/ashik.jpg" className={styles.userImage}/>
            </div>

            <div className={styles.userInfo}>
                <h3 className="fw-bold">Md. Ashikuzzaman</h3>
                <p className="text-muted my-1">Software Engineer</p>
                <div className={`${styles.socialIcons} mt-2`}>
                    <FaYoutube size={22}/>
                    <FaInstagram size={22}/>
                    <FaGithub size={22}/>
                </div>
            </div>
        </div>
    );
}

export default Intro;