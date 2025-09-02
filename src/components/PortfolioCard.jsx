import { useSelector } from "react-redux";
import styles from "../assets/css/PortfolioCard.module.css";
import { Link } from "react-router-dom";

function PortfolioCard({id, imageUrl, tags, title}){

    const {isDark} = useSelector((store) => store.darkMode);

    return (
        <Link to={`/project-details/${id}`} className={`${styles.portfolioCard} ${isDark ? styles.darkPortfolioCard : ""}`}>
            <div className={styles.portfolioCardImageContainer}>
                <img src={imageUrl} className={styles.portfolioCardImage}/>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div>
                    <p className="my-2">{tags.join(", ")}</p>
                    <h6>{title}</h6>
                </div>
            </div>
        </Link>
    );
}

export default PortfolioCard;