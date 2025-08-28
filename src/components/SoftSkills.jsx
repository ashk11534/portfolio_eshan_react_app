import { useEffect, useState } from "react";
import styles from "../assets/css/SoftSkills.module.css";

function SoftSkills() {
    const [softSkills, setSoftSkills] = useState([])
                
    useEffect(() => {
        async function fetch_about_info() {
            const response = await fetch("http://127.0.0.1:8000/about-info");
            const data = await response.json();

            setSoftSkills(data.about_info.soft_skills ? data.about_info.soft_skills : []);

            console.log(data.about_info.setSoftSkills)
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