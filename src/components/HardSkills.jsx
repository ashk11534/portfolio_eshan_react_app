import { useEffect, useState } from "react";
import styles from "../assets/css/HardSkills.module.css";
import HardSkill from "./HardSkill";

function HardSkills(){
    const [hardSkills, setHardSkills] = useState([])
            
    useEffect(() => {
        async function fetch_about_info() {
            const response = await fetch("https://akibeshan.pythonanywhere.com/about-info");
            const data = await response.json();

            setHardSkills(data.about_info.hard_skills ? data.about_info.hard_skills : []);
        }

        fetch_about_info()

    }, [])


    return (
        <>
            <h4 className="fw-bold mt-4 mb-3">HardSkills</h4>
            <div className={styles.hardSkills}>
                {hardSkills.map((hardSkill) => {
                    return <HardSkill skillImage={hardSkill.skill_image} numberOfProjects={hardSkill.number_of_projects} title={hardSkill.title}/>
                })}
            </div>
        </>
    );
}

export default HardSkills;