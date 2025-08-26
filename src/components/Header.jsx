import { useDispatch, useSelector } from 'react-redux';
import styles from '../assets/css/Header.module.css';
import whiteLogo from "../assets/logo/white-logo.png";
import darkLogo from "../assets/logo/logo.png";
import lightModeIcon from "../assets/light-dark-mode-icons/light-mode-icon.png";
import darkModeIcon from "../assets/light-dark-mode-icons/dark-mode-icon.png";
import { darkModeSliceActions } from '../store';

function Header(){
    
    const {isDark} = useSelector(store => store.darkMode)

    const dispatch = useDispatch()

    return <div className={`${styles.header} container-fluid ${isDark && styles.darkNavBar}`}>
        <img src={isDark ? whiteLogo : darkLogo} className={styles.logo}/>
        <img src={isDark ? lightModeIcon : darkModeIcon} className={styles.darkLightModeIcon} onClick={() => dispatch(darkModeSliceActions.toggleMode())}/>
    </div>
}

export default Header;