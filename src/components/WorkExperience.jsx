import { useSelector } from "react-redux";
import styles from "../assets/css/WorkExperience.module.css";

function WorkExperience({title, workDuration, companyName, description}){
    const {isDark} = useSelector((store) => store.darkMode);

    return <div className={`${styles.workExperience} mt-4`}>
        <h5 className="fw-bold my-2">{title}</h5>
        <div className="my-2">
            <span className={`${styles.jobDuration} ${styles.darkJobDuration}`}>{workDuration}</span> &nbsp;
            <span style={{fontSize: '14px'}}>{companyName}</span>
         </div>
         <p style={{fontSize: '14px', lineHeight: 1.7, 'textAlign': 'justify'}}>{description}</p>   
    </div>
}

export default WorkExperience;