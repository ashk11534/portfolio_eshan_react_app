import styles from '../assets/css/Intro.module.css';

function Intro(){
    return (
        <div className={styles.Intro}>
            <div className={styles.userImageContainer}>
                <img src="images/user-image.jpg" className={styles.userImage}/>
            </div>

            <div className={styles.userInfo}>
                <h3 className="fw-bold">Akib Us Suny Eshan</h3>
                <p className="text-muted my-1">Software Designer</p>
                <div class={styles.socialIcons}>
                    <img src="images/youtube.png"/>
                    <img src="images/instagram.png"/>
                    <img src="images/github.png"/>
                </div>
            </div>
        </div>
    );
}

export default Intro;