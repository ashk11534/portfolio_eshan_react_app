import { Link } from "react-router-dom";
import styles from "../assets/css/Tabs.module.css";
import { useDispatch, useSelector } from "react-redux";
import { tabSliceActions } from "../store";

function Tabs(){

    const {activeTab} = useSelector((store) => store.tab);
    const {isDark} = useSelector((store) => store.darkMode);
    const dispatch = useDispatch();

    return <div className={`${styles.tabs} my-3 ${isDark && styles.darkTabs}`}>
        <Link to="/" className={`${isDark && styles.darkTab} ${styles.tab} ${activeTab === "portfolio" && styles.active} ${activeTab === "portfolio" && isDark && styles.darkActiveTab}`} onClick={() => dispatch(tabSliceActions.selectPortfolioTab())}>Portfolio</Link>
        <Link to="/about" className={`${isDark && styles.darkTab} ${styles.tab} ${activeTab === "about" && styles.active} ${activeTab === "about" && isDark && styles.darkActiveTab}`} onClick={() => dispatch(tabSliceActions.selectAboutTab())}>About</Link>
    </div>
}

export default Tabs;