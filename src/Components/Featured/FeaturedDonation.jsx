

import { useEffect, useState } from "react";
import Job from "../Job/Job";



const FeaturedDonation = () => {
    const [jobs,setJobs]= useState([]);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then (data =>setJobs(data))
    })
    return (
        <div>
            <div>
            
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            
        </div>
        
    );
};

export default FeaturedDonation;