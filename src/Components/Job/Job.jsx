// import {MdLocationOn} from "react-icons/md"

const Job = ({job}) => {
    const {picture,title,category,category_bg,card_bg,text_button_bg,description,price} =job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl m-6 ">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-actions ">
                 <button className="btn btn-primary">{category}</button>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p></p>
            </div>
      </div>
    );
};

export default Job;