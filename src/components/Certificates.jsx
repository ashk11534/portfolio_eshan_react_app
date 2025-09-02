import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Certificates(){
    const [certificates, setCertificates] = useState([])
                    
    useEffect(() => {
        async function fetch_achievements() {
            const response = await fetch("https://akibeshan.pythonanywhere.com/get-achievements");
            const data = await response.json();

            setCertificates(data.achievements.certificates ? data.achievements.certificates : []);
        }

        fetch_achievements()

    }, [])
    return <>
        <h4 className="fw-bold  mt-4 mb-3">Professional Certificates</h4>

        {certificates.map(certificate => {
            return <p key={certificate.id} className="mb-3" style={{fontSize: '17px'}}>{certificate.title} <Link to={certificate.certificate_link} style={{fontSize: "14px"}}>See</Link></p>
        })}
        
    </>;
}

export default Certificates;