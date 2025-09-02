import styles from "../assets/css/ResearchPaper.module.css";

function ResearchPaper({title, published_status, journal, description}){
    return <div className={`${styles.researchPaper} mt-4`}>
                <h5 className="fw-bold my-2">{title}</h5>
                <div className="my-2">
                    <span className={styles.publishStatus}>{published_status}</span> &nbsp;
                    <span style={{fontSize: '14px'}}>{journal}</span>
                 </div>
                 <p style={{fontSize: '14px', lineHeight: 1.7, 'textAlign': 'justify'}}>{description}</p>   
            </div>
}

export default ResearchPaper;