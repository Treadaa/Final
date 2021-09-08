import React from 'react'
import { Container,Content,GetH1,GetH2,GetP2,GetP,ImgWrap,Img } from '../GetStarted/startelement'
import img  from '../../images/Kohli.jpg'

const index = () => {
    return (
     <Container>
          <ImgWrap>
                    <Img src={img}/>
                    
                    </ImgWrap>
         
            <Content>
                <GetH1>What is Treadaa</GetH1>
                <GetP>Platform Where Integrity of Sports,Stocks and Trade comes with value.
                    The value is not what we think, value is what customer feeling said.You can Trade your value and can earn money to establish your future.
                </GetP>
                <GetH2>Why Treadaa</GetH2>
                <GetP2>Treadaa will be a new revolution in a market. It will capture all the markets of Stocks,Trade and Sports.It will gujdrfgrgudr dfgvdfgv dv</GetP2>
            </Content>
        
     </Container>  
     
    )
}

export default index
