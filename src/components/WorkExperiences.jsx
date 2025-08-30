import { useEffect, useState } from "react";
import WorkExperience from "./WorkExperience";

function WorkExperiences(){
    const [workExperiences, setWorkExperiences] = useState([])
        
    useEffect(() => {
        async function fetch_about_info() {
            const response = await fetch("https://akibeshan.pythonanywhere.com/about-info");
            const data = await response.json();

            setWorkExperiences(data.about_info.work_experiences ? data.about_info.work_experiences : []);
        }

        fetch_about_info()

    }, [])
    return (
        <>
            <h4 className="fw-bold  mt-4 mb-3">Work Experience</h4>
            {workExperiences.map((workExperience) => {
                return <WorkExperience title={workExperience.title} workDuration={workExperience.work_duration} companyName={workExperience.company_name} description={workExperience.description}/>
            })}
        </>
    );
}

export default WorkExperiences;