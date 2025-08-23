import { Link } from "react-router-dom";
import styles from "../assets/css/PortfolioDetailsModal.module.css";
import { IoCloseCircle } from "react-icons/io5";

function PortfolioDetailsModal(){
    return <div className={styles.modalParentContainer}>
        <div className={styles.modalParent}>
            <div className={styles.modal}>
                
                <div className={styles.modalHeader}>
                    <div className={styles.placeholderDiv}></div>
                    <h5>File sharing concept</h5>
                    <Link to="/" style={{textDecoration: 'none', color: '#333'}}><IoCloseCircle size={25} color="red" style={{cursor: 'pointer'}}/></Link>
                </div>

                <div className={styles.modalBody}>
                    <h5>Modal body</h5>
                </div>
            </div>
        </div>
    </div>;
}

export default PortfolioDetailsModal;