import { useEffect, useState } from "react";

function AboutIntro(){
    const [aboutInfo, setAboutInfo] = useState({})
    
    useEffect(() => {
        async function fetch_about_info() {
            const response = await fetch("http://127.0.0.1:8000/about-info");
            const data = await response.json();

            setAboutInfo(data.about_info);

            console.log(data.about_info)
        }

        fetch_about_info()

    }, [])

    return <p style={{fontSize: '14px', lineHeight: 1.7, 'textAlign': 'justify'}}>{aboutInfo.intro}</p>;
}

export default AboutIntro;