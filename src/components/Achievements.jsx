import { useDispatch, useSelector } from "react-redux";
import Awards from "./Awards";
import Certificates from "./Certificates";
import CoursesAndCredentials from "./CoursesAndCredentials";
import ResearchPapers from "./ResearchPapers";
import { useEffect } from "react";
import { tabSliceActions } from "../store";

function Achievements(){
    const {isDark} = useSelector(store => store.darkMode);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tabSliceActions.selectAchievementsTab())
    }, [])

    return <div style={{color: `${isDark ? "#fff" : "#333"}`}}>
        <Awards/>
        <ResearchPapers/>
        <CoursesAndCredentials/>
        <Certificates/>
    </div>
}

export default Achievements;