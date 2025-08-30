import { useEffect, useState } from "react";

function AboutIntro(){
    const [aboutInfo, setAboutInfo] = useState({})
    
    useEffect(() => {
        async function fetch_about_info() {
            const response = await fetch("https://akibeshan.pythonanywhere.com/about-info");
            const data = await response.json();

            setAboutInfo(data.about_info);
        }

        fetch_about_info()

    }, [])

    return <p style={{fontSize: '14px', lineHeight: 1.7, 'textAlign': 'justify'}}>{aboutInfo.intro}</p>;
}

export default AboutIntro;