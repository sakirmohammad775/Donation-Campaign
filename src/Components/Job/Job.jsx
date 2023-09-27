/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import {MdLocationOn} from "react-icons/md"

import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {id,picture,title,category,category_bg,card_bg,description,price} =job;
    return (
        <>
        
        <Link to={`/job/${id}`}>    
        <div className="card card-compact  shadow-xl m-6" style={{ backgroundColor:job.card_bg }}>
            <figure><img className="mb-3" src={picture} alt="" /></figure>
            <div className="card-actions ">
                 <button className="btn ml-5 mb-2 rounded border-transparent" style={{ backgroundColor:job.card_bg }}>
                    <p style={{color:job.category_bg}}>{category}</p></button>
            </div>
            
                <h2 className="card-title ml-5 text-sm pb-2" style={{ color:job.category_bg }}>{title}</h2>
        </div>
        </Link>
        </>
    );
};

export default Job;