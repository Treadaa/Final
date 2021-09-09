import React from 'react'
import { Container,Content,Content1,Content2,GetH1,GetH2,GetP2,GetP,ImgWrap,Img,Content3,Content4} from '../GetStarted/startelement'
import img  from '../../images/Kohli.jpg'

const index = () => {
    return (
     <Container>
          <ImgWrap>
                    <Img src={img}/>
                    
                    </ImgWrap>
         
            <Content>
                <Content1>
                <GetH1>What is Treadaa</GetH1>
                <GetP> "Platform Where Integrity of Sports,Stocks and Trade comes with value.
                    The value is not what we think, value is what customer feeling said.You can Trade your value and can earn money to establish your future."
                </GetP>
               </Content1>
               <Content2>
                <GetH2>Why Treadaa</GetH2>
                <GetP2>Treadaa will be a new revolution in a market. It will capture all the markets of Stocks,Trade and Sports.It will gujdrfgrgudr dfgvdfgv dv</GetP2>
                </Content2>
                <Content3>
                  <GetH1>Future Of Treadaa</GetH1>
                  <GetP>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, minima! Architecto totam amet distinctio praesentium perferendis sit libero quidem incidunt, minus est laborum? Perspiciatis,
                    . mollitia nemo blanditiis pariatur iure quis!</GetP>
                </Content3>
                <Content4>
                  <GetH2>Idea Of Treadaa</GetH2>
                  <GetP2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae dignissimos vel commodi ullam voluptate veniam id alias accusantium unde aliquam vero.
                     saepe possimus assumenda doloremque explicabo aliquid veritatis, quisquam corrupti.</GetP2>
                </Content4>
            </Content>
        
     </Container>  
     
    )
}

export default index
