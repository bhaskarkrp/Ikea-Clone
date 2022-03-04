import React from 'react'
import Header from './AboutComponents/Header'
import BigCard from './AboutComponents/BigCard'
import BigCardsdata from './AboutComponents/BigCardsData'
import Paragraph from './AboutComponents/Paragraph'

import BigCardLink from './AboutComponents/BigCardLink'
import SmallCard from './AboutComponents/SmallCard'
import Footer from './AboutComponents/Footer'

import CopyRight from './AboutComponents/CopyRight'

const About = () => {
  return (
   <>
    
   <Header/>
   <BigCard 
    
    title={BigCardsdata[0].title}
    imgsrc={BigCardsdata[0].imgsrc}
    para={BigCardsdata[0].para}
    links={BigCardsdata[0].links}

   />
   <BigCard 
    
    title={BigCardsdata[1].title}
    imgsrc={BigCardsdata[1].imgsrc}
    para={BigCardsdata[1].para}
    links={BigCardsdata[1].links}

   />
   <BigCard 
    
    title={BigCardsdata[2].title}
    imgsrc={BigCardsdata[2].imgsrc}
    para={BigCardsdata[2].para}
    links={BigCardsdata[2].links}
    
   />
   
   <BigCardLink/>
   
   
   <Paragraph/>
   
   <SmallCard/>


   <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
   <Footer/>

   
  <CopyRight/> 

   </div>
 
   

  
   

   </>
  )
}

export default About