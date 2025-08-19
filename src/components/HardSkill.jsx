import styles from "../assets/css/HardSkill.module.css";

function HardSkill(){
    return (
        <div className={styles.hardSkill}>
            <div className={styles.skillImageContainer}>
                <img className={styles.skillImage} src="images/user-image.jpg"/>
            </div>
            <p style={{fontSize: "12px"}} className="my-1">20 projects</p>
            <p style={{fontSize: "15px"}}>JavaScript</p>
        </div>
    );
}

export default HardSkill;