import { useEffect, useState } from "react";
import ResearchPaper from "./ResearchPaper";

function ResearchPapers(){
    const [papers, setPapers] = useState([])
                
    useEffect(() => {
        async function fetch_achievements() {
            const response = await fetch("https://akibeshan.pythonanywhere.com/get-achievements");
            const data = await response.json();

            setPapers(data.achievements.research_papers ? data.achievements.research_papers : []);
        }

        fetch_achievements()

    }, [])
    return <>
        <h4 className="fw-bold  mt-4 mb-3">Research Papers</h4>
        {papers.map(paper => {
            return <ResearchPaper key={paper.id} title={paper.title} published_status={paper.published_status} journal={paper.journal} description={paper.description}/>
        })}
    </>
}

export default ResearchPapers;