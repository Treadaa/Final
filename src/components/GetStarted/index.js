import React,{useState} from 'react'
import { Container,
    Content,
    Content1,
    Content2,
    GetH1,
    GetH2,
    GetP2,
    GetP,
    ImgWrap,
    Img,
    Content3,
    Content4,
    Content5,
    BtnWrapper,
    Button,
    ArrowForward, 
    ArrowRight} from '../GetStarted/startelement'
import img  from '../../images/Image3.jpg'


const Index = () => {
    const [hover,setHover]=useState(0);
    const onHover=()=>{
        setHover(!hover)
    }
    
    return (
       
     <Container>
          <ImgWrap>
                    <Img src={img}/>
                    
                    </ImgWrap>
         
            <Content>
                <Content1>
                <GetH1>What is Tredaa</GetH1>
                
                <GetP> "Platform Where Integrity of Sports,Stocks and Trade comes with value.
                    The value  not what we think, value is what customer feeling said.You can Trade your value and can earn money to establish your future. Treadaa is a Platform where user intrest and emotions meet in a common direction. They will try to invest,think and innovate."
                </GetP>
               </Content1>
               <Content2>
                <GetH2>Why Treadaa</GetH2>
                <GetP2>Treadaa will be a new revolution in a market. It will capture all the markets of Stocks,Trade and Sports. It is not possible to go through the Fundamentals of all value. We have solved your problem of risk.You don't need to read the technicals before investing. We gonna come on your home for the best experience.</GetP2>
                </Content2>
                <Content3>
                  <GetH1>Future Of Treadaa</GetH1>
                  <GetP>Treadaa will be Big Bull of market. Players and Regulatory Body will hunt the customer price value and estbalish a genuine relationship with them. Treadaa gonna fire all the Stock Market and boom in very less ample of time. The IPO raising in very first year is going to be a history in India Market.</GetP>
                </Content3>
                <Content4>
                  <GetH2>Target Of Treadaa</GetH2>
                  <GetP2>Apart from Entertaining user, we are thinking very high. We wanna hunt the scope and incrase the bar of employablity. The college going students, the retired experienced person who are willing to exceute their talent, brokerage firms and many countless factors will be introduced in the concept of Treadaa.</GetP2>
                </Content4>
                <Content5>
                  <GetH2>Idea Of Treadaa</GetH2>
                  <GetP2>Investing in Treadaa is as simple as eating a garam Pakodas in a Rainy Day. Idea is very simple.Indirectly every user will be playing games on Player's value and Integrity.Legends will be coming on this Platform to fire the Stage. Stocks will not only depends on their Performance , overall their Networth will aso decide the share market of PSE. Check the Idea Page for Details.</GetP2>
                </Content5>
                
                <BtnWrapper>
                    <Button to='/signin' onMouseEnter={onHover} 
                    
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        Go to Idea Page {hover?<ArrowForward/>:<ArrowRight/>}
                    </Button>
                </BtnWrapper>
            </Content>
        
     </Container>  
     
    )
}


export default Index
