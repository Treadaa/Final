import React from 'react'
// import Planetone from'../../images/planet1'
import { motion } from 'framer-motion'
import Planettwo from'../../images/planet2.png'
import Planetone from '../../images/planet1.jpg'

import{Section,Container,Columnleft,Columnright,Image} from './Exploreelement'

const index = () => {
  const Fadeleft={
    hidden:{ opacity:0,x:-100},
    visible:{opacity:1,x:0}
  }
    return (
      <Section>
         <Container>
             <Columnleft>
             <motion.h1
               initial={{opacity:0}}
               animate={{opacity:1}}
               transition={{ duration: 1}}>
               Welocme to Treadaa
               </motion.h1>
             <motion.p
             variants={ Fadeleft }
             initial='hidden'
             animate='visible'
             transition={{duration:1}}
             >journey to the unknown</motion.p>

             </Columnleft>
             <Columnright>
             <Image src={Planetone} 
             whileTap={{scale:0.9}} 
             drag={true}
             dragConstraints={{left:0,right:100,top:0,bottom:50}}
             initial={{opacity:0,y:-100}}
             animate={{opacity:1,y:0,transition:{duration:1}}}
             alt="planet"/>
             {/* <Image src={Planettwo} alt="planet"/>
             <Image src={Planetone} alt="planet"/> */}
             {/* <Image src={Planettwo} alt="planet"/> */}
             </Columnright>
         </Container>
      </Section>
    )
}

export default index
