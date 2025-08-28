import styles from "../assets/css/Portfolio.module.css";
import Loader from "./Loader";
import PortfolioCard from "./PortfolioCard";
import { useEffect, useState } from "react";

const projectCards = [
    {imageUrl: "images/portfolio-card-img.png", tags: ["mobile", "ui design"], title: "File sharing concept"},
    {imageUrl: "images/portfolio-card-img-2.png", tags: ["mobile", "ui design"], title: "File sharing concept"},
    {imageUrl: "images/portfolio-card-img-3.png", tags: ["mobile", "ui design"], title: "File sharing concept"},
]

function Portfolio(){

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetch_projects(){
            setLoading(true);

            const response = await fetch("http://127.0.0.1:8000/projects");
            const data = await response.json();
            setProjects(data.projects);

            setLoading(false);
        }

        fetch_projects();
    }, [])

    return <div className={styles.portfolio}>
        {loading && <Loader fontSize={40} fontColor="#000"/>}

        {!loading && <div className={styles.portfolioCards}>
            {projects.map((project, _) => {
                return <PortfolioCard key={_} id={project.id} imageUrl={project.image_url} tags={project.categories} title={project.title}/>
            })}
        </div>}
    </div>
}

export default Portfolio;