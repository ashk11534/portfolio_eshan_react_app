import styles from "../assets/css/CourseAndCredential.module.css";

function CourseAndCredential({title, source, image}){
    return (
            <div className={styles.course}>
                <div className={styles.courseImageContainer}>
                    <img className={styles.courseImage} src={image}/>
                </div>
                <p style={{fontSize: "12px"}} className="my-1">{title}</p>
                <p style={{fontSize: "15px"}}>{source}</p>
            </div>
        );
}

export default CourseAndCredential;