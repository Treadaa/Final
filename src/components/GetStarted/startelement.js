import styled from "styled-components";
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md';
import { Link } from "react-router-dom"
export const Container=styled.div`


display:flex;
postion:absolute;
top:0;
bottom:0;
text-align:center;
align-items:center;
padding:12px 12px;
margin:12px 12px -368px;
justify-content:center;
`

export const Content=styled.div`
position; absolute;
top:0%;
text-alian:center;
transform:translate(20%,-20%);

`

export const GetH1=styled.h1`
display:flex;
color:white;
margin:503px 94px 28px -444px;
}


@media screen and (max-width: 768px){
    font-size:40px;
}
@media screen and (max-width:480px){
    font-size:32px;
} 

`
export const GetP=styled.p`
    display: block;
    width: 615px;
    margin: 19px 24px 132px -560px;
    color:white;
    font-size:20px;
    height:-12px;
}


@media screen and (max-width: 768px){
    font-size:24px;
}
@media screen and (max-width:480px){
    font-size:10px;
}

`
export const ImgWrap=styled.div`
width:955px;
height:100%;

`

export const Img=styled.img`
min-height: 100%;
min-width: 1024px;
  

width: 100%;
height: 134px;
  

position: fixed;
top: 0;
left: 0;
bottom:0;

` 
export const GetH2=styled.h1`
display:flex;
margin: 209px 322px 11px 116px;
color:white;
font-size:48;
text-align:center;
margin: 205px 310px 9px 148px;
}

@media screen and (max-width: 768px){
    font-size:40px;
}
@media screen and (max-width:480px){
    font-size:32px;
} 
`

export const GetP2=styled.p`
display:block;
width:615px;
color:white;
font-size:22px;
margin:23px 149px 12px 12px;
}
@media screen and (max-width: 768px){
    font-size:24px;
}
@media screen and (max-width:480px){
    font-size:10px;
}

`

export const Content1=styled.div`


`
export const Content2=styled.div`
margin: 13px 11px 168px 1px;

`
export const Content3=styled.div`

margin-top:-271px;

`
export const Content4=styled.div`
margin: 13px 11px 168px 1px;

`
export const Content5=styled.div`
margin: 28px 36px 23px -593px;
`

export const ArrowForward=styled(MdArrowForward)`
margin-left:8px;
font-size:20px;
`
export const ArrowRight=styled(MdKeyboardArrowRight)`
margin-left:8px;
font-size:20px;
`
export const BtnWrapper=styled.div`
margin-top:32px;
display:flex;
flex-direction:column;
align-items:center; 

`
export const Button=styled(Link)`

border-radius:50px;
background: ${({primary})=>(primary ? '#94ada3' : '#010606')};
white-space:nowrap;
padding:${({big})=>(big ? '14px 48px': '12px 30px')};
color:${({dark})=>(dark ?'#010606': '#010606')};
font-size=${({fontBig})=>(fontBig ?'20px':'16px')};
outline:none;
border:none;
text-decoration:none;
cursor:pointer;
display:flex;
justify-content:center;
transition: all 0.2s ease-in-out;
 &:hover{
     transition:all 0.2s ease-in-out;
     background:${({primary})=>(primary ? '#fff' : '#01BF1')};
 }
`