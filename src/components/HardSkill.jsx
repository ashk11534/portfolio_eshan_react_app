import styles from "../assets/css/HardSkill.module.css";

function HardSkill({skillImage, numberOfProjects, title}){
    return (
        <div className={styles.hardSkill}>
            <div className={styles.skillImageContainer}>
                <img className={styles.skillImage} src={skillImage}/>
            </div>
            <p style={{fontSize: "12px"}} className="my-1">{numberOfProjects} projects</p>
            <p style={{fontSize: "15px"}}>{title}</p>
        </div>
    );
}

export default HardSkill;