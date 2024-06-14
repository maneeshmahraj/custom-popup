import { useState } from "react";
import Model from "./Model";


const Home = () => {
   
    const [isShow,setIsShow]=useState(false);
   const [isOfferAccepted,setIsOfferAccepted]=useState(false);

   const offerAccepted=()=>{
    setIsOfferAccepted(true)
    setIsShow(false)
   }
    const handlClick=()=>{
      setIsShow(true)
    }
    const handlClose=()=>{
      setIsShow(false);
    }
    const outClickClose=()=>{
      setIsShow(false);
    }
  return(
   <>
  <div className="container">
    <h1 style={{textAlign:"center"}}>custom order overlay</h1>
   
      <div className="show-offer">
       {
        !isOfferAccepted&&<button
        onClick={handlClick}
        className="offer-btn">Show Offer</button>
     
       }
       {
        isOfferAccepted&&<div style={{fontSize:"50px"}}>Offer Accepted!!</div>
       }
       </div>
       {
        isShow&& <Model handlClose={handlClose} offerAccepted={offerAccepted} outClickClose={outClickClose}/>
       }
  </div>
   </>
  )
}

export default Home;