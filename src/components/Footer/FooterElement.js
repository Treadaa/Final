import styled from "styled-components";
import  {Link} from 'react-router-dom';
export const FooterContainer=styled.footer`
background-color:#152b5a;

`
export const FooterWrap=styled.div`
padding:48px 24px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
max-width:1100px;
margin:0 auto;

`

export const FooterLinksContainer=styled.div`
display:flex;
justify:content:center;
@media screen and (max-width:820px){
    padding-top:32px;

}

`

export const FooterLinksWrapper=styled.div`
dislpay:flex;
 @media screen and (max-width:820px){
flex-directional:column;
 }
`

export const FooterLinkItems=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
margin:25px;
text-align:left;
width:160px;
box-sizing:border-box;
color:#fff;

@media screen and (max-width:420px)
{
    margin:0;
    padding:30px;
    width:100%;
}
`

export const FooterLinkTitle=styled.h1`

font-size:19px;
margin-bottom:30px;
`

export const FooterLink=styled(Link)`
color:#fff;
text-decoration:none;
margin-bottom:1.5rem;
font-size:14px;

&:hover{
    color:#01bf71;
    transition: 0.3s ease-out;
}
`
export const SocialMedia=styled.section`
max-width:1000px;
width:100%

`

export const SocialMediaWrap=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
max-width:1100px;
margin:40px auto 0 auto;

@media screen and (max-width:820px){
    flex-direction:column;
}
`

export const SocialLogo=styled(Link)`
color:#fff;
justify-self:start;
cursor:pointer;
text-decoration:none;
font-size:2.5rem;
display:flex;
align-items:center;
margin-bottom:16px;
font-weight:bold;
`

export const WebsiteRights=styled.small`
color:#fff;
font-size:1.1rem;
margin-bottom:50px;
`
export const SocialIcons=styled.div`
display:flex;
justify-content: space-between;
align-items:center;
width:210px;
`

export const SocialIconLink=styled.a`
color:white;
font-size:25px;
`