import AboutIntro from "./AboutIntro";
import EducationQualifications from "./EducationQualifications";
import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";
import WorkExperiences from "./WorkExperiences";
import styles from "../assets/css/About.module.css";
import { useSelector } from "react-redux";

function About(){
    const {isDark} = useSelector((store) => store.darkMode);

    return <div className={isDark ? styles.about : ""}>
        <AboutIntro/>
        <WorkExperiences/>
        <EducationQualifications/>
        <HardSkills/>
        <SoftSkills/>
    </div>;
}

export default About;