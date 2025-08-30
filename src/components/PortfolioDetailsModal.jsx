import { Link, useParams } from "react-router-dom";
import styles from "../assets/css/PortfolioDetailsModal.module.css";
import portfolioExampleImage from "../assets/images/portfolio-card-img-2.png";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function PortfolioDetailsModal(){

    const {isDark} = useSelector((store) => store.darkMode);

    const [project, setProject] = useState({});
    const [loading, setLoading] = useState(false);

    const params = useParams();

    const project_id = parseInt(params.project_id);

    useEffect(() => {
        async function fetch_project(){
            setLoading(true);

            const response = await fetch(`https://akibeshan.pythonanywhere.com/projects/${project_id}`);
            const data = await response.json();
            setProject(data.project);

            setLoading(false);
        }

        fetch_project();
    }, [])

    return (
        <>
            {loading && <Loader fontSize={40} fontColor="#000"/>}

            {!loading && <div className="container" style={{paddingTop: "70px", paddingBottom: "70px", display: 'flex', justifyContent: 'center'}}>
                <div className={`${styles.portfolioDetailsContent} ${isDark ? styles.darkPortfolioDetails : ""}`}>
                    <h6><Link to="/"><IoIosArrowDropleftCircle size={25} color="#333" className={isDark ? styles.DarkBackBtn : ""}/></Link> <span className={`${isDark ? styles.darkHomeText : ""} text-muted`}>Home</span> / Project Details</h6>
                    <div className="details mt-3">
                        <img src={project.image_url} className={styles.portfolioDetailsImage}/>
                        <h5 className="mt-3">{project.title}</h5>
                        <p className={`${styles.portfolioDetailsText} mt-2`} style={{'textAlign': 'justify'}}>{project.details}</p>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default PortfolioDetailsModal;