import styles from "../assets/css/Award.module.css";

function Award({title, winning_year, award_source, description}){
    return <div className={`${styles.award} mt-4`}>
            <h5 className="fw-bold my-2">{title}</h5>
            <div className="my-2">
                <span className={styles.awardYear}>{winning_year}</span> &nbsp;
                <span style={{fontSize: '14px'}}>{award_source}</span>
             </div>
             <p style={{fontSize: '14px', lineHeight: 1.7, 'textAlign': 'justify'}}>{description}</p>   
        </div>
}

export default Award;