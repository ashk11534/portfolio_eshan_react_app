import styles from "../assets/css/SoftSkills.module.css";

function SoftSkills() {
    return (
        <>
            <h4 className="fw-bold  mt-4 mb-3">Soft Skills</h4>
            <div className={styles.softSkills}>
                <h5 className={`${styles.softSkill} fw-bold mb-3`}>Fast Learning</h5>
                <h5 className={`${styles.softSkill} fw-bold mb-3`}>Fast Learning</h5>
                <h5 className={`${styles.softSkill} fw-bold mb-3`}>Fast Learning</h5>
                <h5 className={`${styles.softSkill} fw-bold mb-3`}>Fast Learning</h5>
            </div>
        </>
    );
}

export default SoftSkills;