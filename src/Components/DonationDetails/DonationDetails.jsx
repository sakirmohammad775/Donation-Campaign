import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../Localstorage/Localstorage";


const DonationDetails = () => {
    const jobs = useLoaderData();
    const {id}=useParams()
    const idInt =parseInt(id);
    const job =jobs.find(job=> job.id === idInt);
    console.log(job);

    const DonationDone =() =>{
        saveDonation(idInt);
        toast('Successfully Done')
        
    }
    return (
        <>
        <div>
            {/* <h2>Job details of:{id}</h2>
            <p>{job.category}</p> */}
            <div className="hero min-h-screen relative">
                <img className='hero min-h-screen mt-5' src={job.picture} alt="" />
                <div className="absolute bottom-10 left-10">
                    <button onClick={DonationDone} className="btn bg-[#FF444A] border-none text-white ">Donate {job.price}</button>
                </div>
            </div>
            <h2 className="font-bold text-4xl my-5">{job.title}</h2>
            <p className="font-normal">{job.description}</p>
            <ToastContainer />
        </div>
        </>
    );
    
};

export default DonationDetails;