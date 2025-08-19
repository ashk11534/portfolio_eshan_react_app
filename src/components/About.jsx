import AboutIntro from "./AboutIntro";
import EducationQualifications from "./EducationQualifications";
import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";
import WorkExperiences from "./WorkExperiences";

function About(){
    return <div>
        <AboutIntro/>
        <WorkExperiences/>
        <EducationQualifications/>
        <HardSkills/>
        <SoftSkills/>
    </div>;
}

export default About;