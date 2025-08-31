import { useDispatch, useSelector } from 'react-redux';
import styles from '../assets/css/Header.module.css';
import whiteLogo from "../assets/logo/white-logo.png";
import darkLogo from "../assets/logo/logo.png";
import lightModeIcon from "../assets/light-dark-mode-icons/light-mode-icon.png";
import darkModeIcon from "../assets/light-dark-mode-icons/dark-mode-icon.png";
import { contactFormSliceActions, darkModeSliceActions } from '../store';
import { useEffect, useState } from 'react';

function Header(){
    
    const {isDark} = useSelector(store => store.darkMode)

    const dispatch = useDispatch()

    const [basicConf, setBasicConf] = useState({})

    useEffect(() => {
        async function fetch_basic_configuration() {
            const response = await fetch("https://akibeshan.pythonanywhere.com/basic-configuration");
            const data = await response.json();

            setBasicConf(data.basic_conf);
        }

        fetch_basic_configuration()

    }, [])

    return <div className={`${styles.header} container-fluid ${isDark ? styles.darkNavBar : ""}`}>
        <img src={isDark ? basicConf.logo_light : basicConf.logo_dark} className={styles.logo}/>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px'}}>
            <button className={styles.contactMeBtn} onClick={() => dispatch(contactFormSliceActions.toggleVisibility())}>Contact Me</button>
            <img src={isDark ? lightModeIcon : darkModeIcon} className={styles.darkLightModeIcon} onClick={() => dispatch(darkModeSliceActions.toggleMode())}/>
        </div>
    </div>
}

export default Header;