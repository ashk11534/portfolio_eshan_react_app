import styles from "../assets/css/EducationQualification.module.css";

function EducationQualification(){
    return (
        <div className={styles.educationQualification}>
            <span className={`${styles.educationDuration} ${styles.darkEducationDuration}`}>2013-2017</span>
            <h5 className="my-1 fw-bold">BSc. in CSE</h5>
            <p style={{fontSize: "14px"}}>Stamford University Bangladesh</p>
        </div>
    );
}

export default EducationQualification;