import { Link } from "react-router-dom";
import styles from "../assets/css/PortfolioDetailsModal.module.css";
import portfolioExampleImage from "../assets/images/portfolio-card-img-2.png";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useSelector } from "react-redux";

function PortfolioDetailsModal(){

    const {isDark} = useSelector((store) => store.darkMode);

    return (<div className="container" style={{paddingTop: "70px", paddingBottom: "70px", display: 'flex', justifyContent: 'center'}}>
            <div className={`${styles.portfolioDetailsContent} ${isDark && styles.darkPortfolioDetails}`}>
                <h6><Link to="/"><IoIosArrowDropleftCircle size={25} color="#333" className={isDark && styles.DarkBackBtn}/></Link> <span className={`${isDark && styles.darkHomeText} text-muted`}>Home</span> / Project Details</h6>
                <div className="details mt-3">
                    <img src={portfolioExampleImage} className={styles.portfolioDetailsImage}/>
                    <h5 className="mt-3">File Sharing Concept</h5>
                    <p className={`${styles.portfolioDetailsText} mt-2`} style={{'textAlign': 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At adipiscing proin facilisis nulla ut suspendisse sit tempor. Turpis nibh sit elementum eros interdum purus. Pretium a mattis pellentesque et leo risus varius nunc.</p>
                </div>
            </div>
        </div>);
}

export default PortfolioDetailsModal;