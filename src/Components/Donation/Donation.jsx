/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../Localstorage/Localstorage";
import Job from "../Job/Job";



const Donation = () => { 
    const jobs =useLoaderData();

    const [appliedJobs,setAppliedJobs]=useState([])


    useEffect(() =>{
        const storedJobIds = getStoredDonation();
        if(jobs.length>0){
            // const jobsApplied=jobs.filter(job =>stortedJobIds.includes(job.id))

            const jobsApplied =[];
            for(const id of storedJobIds){
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
                <ul className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 ">{
                appliedJobs.map(job =><li key={job.id}>
                    <div className="hero bg-base-200 ">
                        <div className="hero-content flex-col lg:flex-row">
                             <img src= {job.picture} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>

                        <button className="btn rounded border-transparent" style={{ backgroundColor:job.card_bg }}>
                        <p style={{color:job.category_bg}}>{job.category}</p></button>

                        <h2 className="card-title  text-sm " >{job.title}</h2>

                        <p className="" style={{color:job.category_bg}}>{job.price}</p>

                        <button className="btn border-transparent" style={{ backgroundColor:job.card_bg }}><p style={{color:job.category_bg}}>View Details</p></button>
                    </div>
                </div>
            </div>
                </li>)
                }</ul>
            
            
            
        </div>
    );
};

export default Donation;