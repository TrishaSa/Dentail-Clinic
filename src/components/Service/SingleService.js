import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleService = () => {
    const {id}=useParams()
    const [details,setDetails]= useState([])
    const [specificDetail,setSpecificDetail] = useState({})
   
   
 useEffect(() =>
      fetch("/services.json")
      .then(res => res.json())
      .then(data=>setDetails(data))
    ,[])


useEffect(() =>{
    if(details.length>0){
        const matchedData= details.find(detail=> detail.key==id)
        setSpecificDetail(matchedData);
    }

}
,[details, id])

    return (
        
    <div >
           <h2> This is dynamic page and id is:{id}</h2>
           <p>Name: {specificDetail?.name}</p>
    </div>
           
     
   
  
    );
};

export default SingleService;