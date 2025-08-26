import { useSelector } from "react-redux";
import styles from "../assets/css/WorkExperience.module.css";

function WorkExperience(){
    const {isDark} = useSelector((store) => store.darkMode);

    return <div className={`${styles.workExperience} mt-4`}>
        <h5 className="fw-bold my-2">Full-Stack Developer</h5>
        <div className="my-2">
            <span className={`${styles.jobDuration} ${styles.darkJobDuration}`}>Present</span> &nbsp;
            <span style={{fontSize: '14px'}}>Walton Digi-Tech Ind. Ltd./Bangladesh</span>
         </div>
         <p style={{fontSize: '14px', lineHeight: 1.7, 'textAlign': 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At adipiscing proin facilisis nulla ut suspendisse sit tempor. Turpis nibh sit elementum eros interdum purus. Pretium a mattis pellentesque et leo risus varius nunc.</p>   
    </div>
}

export default WorkExperience;