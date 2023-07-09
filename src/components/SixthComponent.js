import React from 'react'
import { styled } from 'styled-components';
import LogoWebPage from './img/LogoWebPage.png';
const SixthComponent = () => {
  return (
    <div>
   <Footer>
   <Logo1>
      <img src={LogoWebPage} width={400} height={430} alt='Logoja e web-it'></img>
    </Logo1>
    <Links>
    <h1>Our Location</h1>
    <ul>
      <li><a href='FirstComponent.js'>Tirana</a></li>
      <li><a href='FirstComponent.js'>Durres</a></li>
      <li><a href='FirstComponent.js'>Korca</a></li>
      <li><a href='FirstComponent.js'>Shkodra</a></li>
    </ul>
</Links>
<Links>
    <h1>Quick Links</h1>
    <ul>
       <li><a href='FirstComponent.js'>Home</a></li>
       <li><a href='SecondComponent.js'>Our Courses</a></li>
       <li><a href='FourthComponent.js'>Sign In</a></li>
        <li><a href='FifthComponent.js'>About Us</a></li>
      </ul>
      </Links>
      <Links>
      <h1>Download App</h1>
      <ul>
        <li><a href='FirstComponent.js'>Play Store</a></li>
        <li><a href='FirstComponent.js'>App Store</a></li>
      </ul>
      </Links>
   </Footer>
   <Copy>
   &#169; Copyright 2023
   </Copy>
    </div>
  )
}

export default SixthComponent
const Footer=styled.footer`
display: flex;
margin: auto;
justify-content: space-between;
background-color: rgb(224, 176, 255);
ul{
  list-style: none;
  text-align: left;
}
li{
  padding: 3px;
}
a{
  text-decoration: none;
  color: black;
  padding: 3px;
&:hover{
  background-color: white;
  border-radius: 10px;
  color: rgb(187,51,133);
}
}
@media only screen and (max-width: 1115px) {
  display: block;
  h1{
    text-align: left;
  }
}
`;
const Links=styled.div`
margin: 30px;
`;
const Logo1=styled.div`
padding-left: 40px;
@media only screen and (max-width: 1115px){
  img{
    padding: 0px;
    margin-left: -200px;
  }
}
`;
const Copy=styled.div`
height: 30px;
padding-top: 15px;
background-color: rgb(224, 176, 205);
`;