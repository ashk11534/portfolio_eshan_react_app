import styles from "../assets/css/Portfolio.module.css";

function Portfolio(){
    return <div className={styles.portfolio}>
        <div className={styles.portfolioCard}>
            <div className={styles.portfolioCardImageContainer}>
                <img src="images/portfolio-card-img.png" className={styles.portfolioCardImage}/>
            </div>
            <p className="my-2">mobile, ui design</p>
            <h6>File sharing concept</h6>
        </div>

        <div className={styles.portfolioCard}>
            <div className={styles.portfolioCardImageContainer}>
                <img src="images/portfolio-card-img-2.png" className={styles.portfolioCardImage}/>
            </div>
            <p className="my-2">mobile, ui design</p>
            <h6>File sharing concept</h6>
        </div>

        <div className={styles.portfolioCard}>
            <div className={styles.portfolioCardImageContainer}>
                <img src="images/portfolio-card-img-3.png" className={styles.portfolioCardImage}/>
            </div>
            <p className="my-2">mobile, ui design</p>
            <h6>File sharing concept</h6>
        </div>
    </div>
}

export default Portfolio;