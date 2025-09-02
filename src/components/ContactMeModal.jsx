import { IoCloseCircle } from "react-icons/io5";
import loading from 'react-useanimations/lib/loading';
import UseAnimations from "react-useanimations";
import styles from "../assets/css/ContactMeModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { contactFormSliceActions, successAlertSliceActions } from "../store";
import { useRef, useState } from "react";

function ContactMeModal(){
    const {isDark} = useSelector(store => store.darkMode);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const inputName = useRef(null);
    const inputEmail = useRef(null);
    const inputMessage = useRef(null);

    function handleFormSubmission() {
        const nameValue = inputName.current.value;
        const emailValue = inputEmail.current.value;
        const messageValue = inputMessage.current.value;

        const formData = new FormData();

        formData.append("name", nameValue);
        formData.append("email", emailValue);
        formData.append("message", messageValue);

        async function sendMessage() {
            if(!nameValue || !emailValue || !messageValue){
                return;
            }

            setIsLoading(true);

            const response = await fetch("https://akibeshan.pythonanywhere.com/send-message", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            console.log(data);

            if(data.ok === 201){
                inputName.current.value = "";
                inputEmail.current.value = "";
                inputMessage.current.value = "";

                setIsLoading(true);
                
                dispatch(contactFormSliceActions.toggleVisibility())
                dispatch(successAlertSliceActions.toggleVisibility())

                setTimeout(() => {
                    dispatch(successAlertSliceActions.closeAlert())
                }, 3000)
            }
        }

        sendMessage();
    }

    return <div className={`${styles.contactMeModalContainer} ${isDark ? styles.darkContactMeModalContainer : ""}`}>
        <div className={`${styles.contactMeModal} ${isDark ? styles.darkContactMeModal : ""}`}>
            <div className={styles.contactMeModalHeader}>
                <div className="placeholderdiv"></div>
                <h5>Contact Me</h5>
                <IoCloseCircle size={30} color="red" style={{cursor: 'pointer'}} onClick={() => dispatch(contactFormSliceActions.toggleVisibility())}/>
            </div>
            <div className={styles.contactMeModalBody}>
                <input ref={inputName} type="text" className={styles.contactMeInput} placeholder="Your name"/>
                <input ref={inputEmail} type="email" className={styles.contactMeInput} placeholder="Your email"/>
                <textarea ref={inputMessage} rows={5} className={styles.contactMeInput} placeholder="Write your message..."style={{lineHeight: 1.7}}></textarea>
            </div>
            <div className={styles.contactMeModalFooter}>
                {!isLoading && <button className={styles.contactSendBtn} onClick={handleFormSubmission}>Send</button>}
                {isLoading && <button className={styles.contactSendBtn}><UseAnimations animation={loading} size={20}/></button>}
            </div>
        </div>
    </div>
}

export default ContactMeModal;