import { useEffect, useState } from "react";
import styles from "../assets/css/SoftSkills.module.css";

function SoftSkills() {
    const [softSkills, setSoftSkills] = useState([])
                
    useEffect(() => {
        async function fetch_about_info() {
            const response = await fetch("https://akibeshan.pythonanywhere.com/about-info");
            const data = await response.json();

            setSoftSkills(data.about_info.soft_skills ? data.about_info.soft_skills : []);
        }

        fetch_about_info()

    }, [])

    return (
        <>
            <h4 className="fw-bold  mt-4 mb-3">Soft Skills</h4>
            <div className={styles.softSkills}>
                {softSkills.map((softSkill) => {
                    return <p className={`${styles.softSkill} mb-3`} style={{fontSize: '17px'}}>{softSkill.title}</p>
                })}
            </div>
        </>
    );
}

export default SoftSkills;