import styles from "../assets/css/EducationQualifications.module.css";
import EducationQualification from "./EducationQualification";

function EducationQualifications(){
    return (
        <>
            <h4 className="fw-bold mt-4 mb-3">Education</h4>
            <div className={styles.educationQualifications}>
                <EducationQualification/>
                <EducationQualification/>
            </div>
        </>
    );
}

export default EducationQualifications;