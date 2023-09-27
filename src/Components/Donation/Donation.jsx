/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../Localstorage/Localstorage";
import Job from "../Job/Job";



const Donation = () => { 
    const jobs =useLoaderData();

    const [appliedJobs,setAppliedJobs]=useState([])


    useEffect(() =>{
        const stortedJobIds = getStoredDonation();
        if(jobs.length>0){
            // const jobsApplied=jobs.filter(job =>stortedJobIds.includes(job.id))

            const jobsApplied =[];
            for(const id of stortedJobIds){
                const job=jobs.find(job=> job.id ===id);
                if(job){
                    jobsApplied.push(job)
                }
            }

            setAppliedJobs(jobsApplied)
           
                }
        
    },[jobs])
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src='{}' alt="Movie"/></figure>
            <ul>{
                appliedJobs.map(job =><li key={job.id}>
                    <span>{job.description}{job.title}</span>
                    <span>{job.picture}</span>
                </li>)
                }</ul>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
        </div>





            <h2>hello man:{appliedJobs.length}</h2>
            
        </div>
    );
};

export default Donation;