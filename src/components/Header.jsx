import styles from '../assets/css/Header.module.css';

function Header(){
    return <div className={`${styles.header} container-fluid`}>
        <img src="images/logo.png" className={styles.logo}/>
        <img src="images/dark-mode-icon.png" className={styles.darkLightModeIcon}/>
    </div>
}

export default Header;