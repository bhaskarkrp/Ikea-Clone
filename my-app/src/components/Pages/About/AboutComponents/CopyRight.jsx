import React from 'react'
import s from './CopyRight.module.css'
const CopyRight = () => {
  return (
    <>
   
   <div className={s.Fcontainer}>

      <div className={s.Fleft}>

        <p>© Inter IKEA Systems B.V. 1999 - 2022</p>

      </div>


      <div className={s.Fright}>

       <a href="/">Privacy Policy</a>
      <a href="/">Cookie Policy</a>
       <a href="/">Change Your Cookie Settings</a>
     </div>


   </div>


    </>
  )
}

export default CopyRight