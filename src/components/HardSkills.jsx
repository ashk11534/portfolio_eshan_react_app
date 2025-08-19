import styles from "../assets/css/HardSkills.module.css";
import HardSkill from "./HardSkill";

function HardSkills(){
    return (
        <>
            <h4 className="fw-bold mt-4 mb-3">HardSkills</h4>
            <div className={styles.hardSkills}>
                <HardSkill/>
                <HardSkill/>
                <HardSkill/>
                <HardSkill/>
            </div>
        </>
    );
}

export default HardSkills;