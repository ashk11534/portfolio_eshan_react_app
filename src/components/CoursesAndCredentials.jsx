import { useEffect, useState } from "react";
import styles from "../assets/css/CoursesAndCredentials.module.css";
import CourseAndCredential from "./CourseAndCredential";

function CoursesAndCredentials(){
    const [courses, setCourses] = useState([])
                
    useEffect(() => {
        async function fetch_achievements() {
            const response = await fetch("https://akibeshan.pythonanywhere.com/get-achievements");
            const data = await response.json();

            setCourses(data.achievements.courses ? data.achievements.courses : []);
        }

        fetch_achievements()

    }, [])

    return <>
        <h4 className="fw-bold  mt-4 mb-3">Courses & Credentials</h4>
        <div className={styles.courses}>
            {courses.map(course => {
                return <CourseAndCredential key={course.id} title={course.title} source={course.source} image={course.image}/>
            })}
        </div>
    </>
}

export default CoursesAndCredentials;