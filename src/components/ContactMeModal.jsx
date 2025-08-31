import { IoCloseCircle } from "react-icons/io5";
import styles from "../assets/css/ContactMeModal.module.css";
import { useDispatch } from "react-redux";
import { contactFormSliceActions } from "../store";

function ContactMeModal(){
    const dispatch = useDispatch();

    return <div className={styles.contactMeModalContainer}>
        <div className={styles.contactMeModal}>
            <div className={styles.contactMeModalHeader}>
                <div className="placeholderdiv"></div>
                <h5>Contact Me</h5>
                <IoCloseCircle size={30} color="red" style={{cursor: 'pointer'}} onClick={() => dispatch(contactFormSliceActions.toggleVisibility())}/>
            </div>
            <div className={styles.contactMeModalBody}>
                <input type="text" className={styles.contactMeInput} placeholder="Your name"/>
                <input type="email" className={styles.contactMeInput} placeholder="Your email"/>
                <textarea rows={5} className={styles.contactMeInput} placeholder="Write your message..."style={{lineHeight: 1.7}}></textarea>
            </div>
            <div className={styles.contactMeModalFooter}>
                <button className={styles.contactSendBtn}>Send</button>
            </div>
        </div>
    </div>
}

export default ContactMeModal;