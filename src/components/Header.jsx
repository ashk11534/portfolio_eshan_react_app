import { useDispatch, useSelector } from 'react-redux';
import styles from '../assets/css/Header.module.css';
import { darkModeSliceActions } from '../store';

function Header(){
    
    const {isDark} = useSelector(store => store.darkMode)

    const dispatch = useDispatch()

    return <div className={`${styles.header} container-fluid ${isDark && styles.darkNavBar}`}>
        <img src={`images/${isDark ? 'white-logo' : 'logo'}.png`} className={styles.logo}/>
        <img src={`images/${isDark ? 'light' : 'dark'}-mode-icon.png`} className={styles.darkLightModeIcon} onClick={() => dispatch(darkModeSliceActions.toggleMode())}/>
    </div>
}

export default Header;