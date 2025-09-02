import AboutIntro from "./AboutIntro";
import EducationQualifications from "./EducationQualifications";
import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";
import WorkExperiences from "./WorkExperiences";
import styles from "../assets/css/About.module.css";
import { useDispatch, useSelector } from "react-redux";
import { tabSliceActions } from "../store";
import { useEffect } from "react";

function About(){
    const {isDark} = useSelector((store) => store.darkMode);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tabSliceActions.selectAboutTab())
    }, [])

    return <div className={isDark ? styles.about : ""}>
        <AboutIntro/>
        <WorkExperiences/>
        <EducationQualifications/>
        <HardSkills/>
        <SoftSkills/>
    </div>;
}

export default About;