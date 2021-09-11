import React,{useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import { HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight } from './HeroElements'

const HeroSection = () => {

    const [hover,setHover]=useState(false);
    const onHover=()=>{
        setHover(!hover)
    }
    return (

        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>

            </HeroBg>
            <HeroContent>
                <HeroH1>Boom!...Something is coming in 2022 and it will be great.</HeroH1>
                <HeroP>Let's Explore and start the Pre-Registration Process of World's First Player Stock Exchange.

                </HeroP>
                <HeroBtnWrapper>
                    <Button to='getstarted' onMouseEnter={onHover} 
                    
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        Get started {hover?<ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection