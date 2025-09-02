import { useEffect, useState } from "react";
import Award from "./Award";

function Awards(){
    const [awards, setAwards] = useState([])
            
    useEffect(() => {
        async function fetch_achievements() {
            const response = await fetch("https://akibeshan.pythonanywhere.com/get-achievements");
            const data = await response.json();

            setAwards(data.achievements.awards ? data.achievements.awards : []);
        }

        fetch_achievements()

    }, [])
    return (
        <>
            <h4 className="fw-bold  mt-4 mb-3">Awards</h4>
            {awards.map(award => {
                return <Award key={award.id} title={award.title} winning_year={award.winning_year} award_source={award.award_source} description={award.description}/>
            })}
        </>
    );
}

export default Awards;