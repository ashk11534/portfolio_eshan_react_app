import { useSelector } from "react-redux";
import styles from "../assets/css/PortfolioCard.module.css";

function PortfolioCard({imageUrl, tags, title}){

    const {isDark} = useSelector((store) => store.darkMode);

    return (
        <div className={`${styles.portfolioCard} ${isDark && styles.darkPortfolioCard}`}>
            <div className={styles.portfolioCardImageContainer}>
                <img src={imageUrl} className={styles.portfolioCardImage}/>
            </div>
            <p className="my-2">{tags.join(", ")}</p>
            <h6>{title}</h6>
        </div>
    );
}

export default PortfolioCard;