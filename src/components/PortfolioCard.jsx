import styles from "../assets/css/PortfolioCard.module.css";

function PortfolioCard({imageUrl, tags, title}){
    return (
        <div className={styles.portfolioCard}>
            <div className={styles.portfolioCardImageContainer}>
                <img src={imageUrl} className={styles.portfolioCardImage}/>
            </div>
            <p className="my-2">{tags.join(", ")}</p>
            <h6>{title}</h6>
        </div>
    );
}

export default PortfolioCard;