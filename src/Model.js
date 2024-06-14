

import React from 'react'

const Model = ({handlClose,offerAccepted,outClickClose}) => {
  return (
    <>
    <div className='bgblurmodel' onClick={outClickClose}></div>
    <div className='modal'>
       <button
       onClick={handlClose}
       className='close-btn'>X</button>
       <div className='content'>Click the button below to accept our amazing offer !!</div>
       <button onClick={offerAccepted} className='accept-btn'>Offer Accepted</button>
    </div>
    </>
  )
}

export default Model