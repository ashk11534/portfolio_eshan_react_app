import { useEffect, useState } from "react";
import styles from "../assets/css/EducationQualifications.module.css";
import EducationQualification from "./EducationQualification";

function EducationQualifications(){
    const [educations, setEducations] = useState([])
            
    useEffect(() => {
        async function fetch_about_info() {
            const response = await fetch("http://127.0.0.1:8000/about-info");
            const data = await response.json();

            setEducations(data.about_info.educations ? data.about_info.educations : []);

            console.log(data.about_info.educations)
        }

        fetch_about_info()

    }, [])

    return (
        <>
            <h4 className="fw-bold mt-4 mb-3">Education</h4>
            <div className={styles.educationQualifications}>
                {educations.map((education) => {
                    return <EducationQualification duration={education.education_duration} title={education.title} universityName={education.university_name}/>
                })}
            </div>
        </>
    );
}

export default EducationQualifications;