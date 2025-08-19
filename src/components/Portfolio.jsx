import styles from "../assets/css/Portfolio.module.css";
import PortfolioCard from "./PortfolioCard";

const projectCards = [
    {imageUrl: "images/portfolio-card-img.png", tags: ["mobile", "ui design"], title: "File sharing concept"},
    {imageUrl: "images/portfolio-card-img-2.png", tags: ["mobile", "ui design"], title: "File sharing concept"},
    {imageUrl: "images/portfolio-card-img-3.png", tags: ["mobile", "ui design"], title: "File sharing concept"},
]

function Portfolio(){
    return <div className={styles.portfolio}>
        {projectCards.map((card, _) => {
            return <PortfolioCard key={_} imageUrl={card.imageUrl} tags={card.tags} title={card.title}/>
        })}
    </div>
}

export default Portfolio;