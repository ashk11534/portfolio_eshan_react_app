import styles from "../assets/css/EducationQualification.module.css";

function EducationQualification({duration, title, universityName}){
    return (
        <div className={styles.educationQualification}>
            <span className={`${styles.educationDuration} ${styles.darkEducationDuration}`}>{duration}</span>
            <h5 className="my-1 fw-bold">{title}</h5>
            <p style={{fontSize: "14px"}}>{universityName}</p>
        </div>
    );
}

export default EducationQualification;