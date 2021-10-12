import styled from 'styled-components'
import { motion } from 'framer-motion'
export const Section=styled.div`

background: black;
display:flex;
height: 100vh; 
max-height:100%;
align-items:enter;
justify-content:center;
@media screen and (max-width:768px){
    max-width:100%;
     max-height:100%;
     overflow-x:hidden;    
}

`
export const Container=styled.div`
display:grid;
grid-template-columns:1fr 1fr;
height:100vh;
padding:3rem calc((100vw-1300px)/2);
@media scree and(max-width:768px)
{
    grid-grid-template-columns:1fr;
}
` 
export const Columnleft=styled.div`
color:white;
display:flex;
flex-direction:column;
padding:5rem 2rem;
align-items:flex-start;
justify-content:center;
h1{
    margin-bottom:0.5rem;
    font-size:2rem;
}
p{
    margin:2rem 0;
    font-size:4rem;
    line-height:1.1;
}
@media screen and (max-width:768px){
   margin-left:38px;

    
}

` 
export const Image=styled(motion.img) `
position:absolute;
height:100%;
width:100%;
max-width:50%;
max-height:25%;
@media screen and (max-width:768px){
    width: 188px;
    height:135px;
    position: fixed;
   
}

` 
export const Columnright=styled.div`
position:relative;
padding:2rem;
display:flex;
align-items:center;
justify-content:center;
${Image}:nth-child(1){
   
    top: 221px;
    right: 40px;
    @media screen and (max-width:768px){
        
        top:8px;
        right: 147px;
    }
    
    

}
${Image}:nth-child(2){
    top:170px;
    right:10px;
}
${Image}:nth-child(3){
    top: 226px;
    right: 45px;
} 
${Image}:nth-child(4){
    top: 226px;
    right: 45px;
      
    
} 

` 
