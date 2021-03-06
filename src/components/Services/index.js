import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-4.svg'
import { ServicesCard,ServicesContainer,ServicesH1,ServicesWrapper,ServicesIcon,ServicesH2,ServicesP, } from './ServicesElement'

const services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce Risk</ServicesH2>
                    <ServicesP>We help reduce your Risk and increase your overall chances.</ServicesP>

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Reduce Risk</ServicesH2>
                    <ServicesP>We help reduce your Risk and increase your overall chances.</ServicesP>
                    
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Reduce Risk</ServicesH2>
                    <ServicesP>We help reduce your Risk and increase your overall chances.</ServicesP>
                    
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default services
