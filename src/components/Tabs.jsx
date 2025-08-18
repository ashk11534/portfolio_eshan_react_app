import { Link } from "react-router-dom";
import styles from "../assets/css/Tabs.module.css";
import { useDispatch, useSelector } from "react-redux";
import { tabSliceActions } from "../store";

function Tabs(){

    const {activeTab} = useSelector((store) => store.tab);
    const dispatch = useDispatch();

    return <div className={`${styles.tabs} my-3`}>
        <Link to="/" className={`${styles.tab} ${activeTab === "portfolio" && styles.active}`} onClick={() => dispatch(tabSliceActions.selectPortfolioTab())}>Portfolio</Link>
        <Link to="/about" className={`${styles.tab} ${activeTab === "about" && styles.active}`} onClick={() => dispatch(tabSliceActions.selectAboutTab())}>About</Link>
    </div>
}

export default Tabs;