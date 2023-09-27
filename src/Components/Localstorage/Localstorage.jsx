const getStoredDonation =() =>{
    const storedDonation =localStorage.getItem('donation-type')
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}
const saveDonation = id =>{
    const storedDonation = getStoredDonation();
    const exists =storedDonation.find(jobId =>jobId ===id);
    if(!exists){
        storedDonation.push(id);
        localStorage.setItem('donation-type',JSON.stringify(storedDonation))
    }
}

export{ getStoredDonation,saveDonation}