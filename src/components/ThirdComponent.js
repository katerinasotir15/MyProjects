import React from 'react'
import { styled } from 'styled-components'
import VisualArts from './img/VisualArts.jpg'
import piano from './img/piano.jpg';
import violin from './img/violin.jpg';
import canto from './img/canto.webp';
const ThirdComponent = () => {
  return (
    <div>
    <Line><Span/><Text>Coming Soon</Text><Span/></Line>
    <Paragraph>
    <P>Our team is working to offer new courses in a completety different direction.<br></br>
       We are prepairing for you courses in art. The courses will be ready within a month.<br></br>
       Everyone who will register in the first groups, will get lower prices. 
       Hurry up and follow your dreams!<br></br>
       Scroll for more informations!</P>
       </Paragraph>
       <CommingSoon>
       <Art>
       <h1>Visual Arts</h1>
       <img src={VisualArts} width={200} height={130} alt='Visual Arts'></img>
       <P1>Do you like painting, drawing and the art of beaty?
          Register and let your dreams continue.
          Part of our team are well-known painters.
          If you register now you will get 20% off!</P1>
          <Button>Register</Button>
       </Art>
       <Art>
        <h1>Piano</h1>
        <img src={piano} width={200} height={130} alt='Piano'></img>
        <P1>Do you want to learn more about piano? You're in the
            right place! Our well-known piano-players will take care for you to learn everything
            you need. Register and get 30% off!  
        </P1>
        <Button>Register</Button>
       </Art>
       <Art>
        <h1>Violin</h1>
        <img src={violin} width={200} height={130} alt='Violin'></img>
        <P1>Are you looking for a way how to learn playing violin?
            You're in the right place! Part of our team are well-known violinists. 
            If you register now, you will get 35% off!
        </P1>
        <Button>Register</Button>
       </Art>
       <Art>
        <h1>Canto</h1>
        <img src={canto} width={200} height={130} alt='Canto'></img>
        <P1>Do you dream of becoming singer? Let us help you! 
            Register and take canto lessons from 
            the best singers in our country. If you register now you will 
            get 15% off!
        </P1>
        <Button>Register</Button>
       </Art>
       </CommingSoon>
    </div>
  )
}
export default ThirdComponent
const Line=styled.div`
display: flex;
align-items:center;
margin-left: 150px;
margin-right: 150px;
`;
const Span=styled.span`
flex: 1;
height: 2px;
background-color: #3d93ad;
`;
const Text=styled.h1`
margin: 40px;
font-weight: bold;
font-size: 70px;
color: #3d93ad;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
@media only screen and (max-width: 768px) {
  font-size: 20px;
}
`;
const Paragraph=styled.p`
background-color: burlywood;
display: flex;
margin: auto;
justify-content: center;
height: 140px;
width: 900px;
border-radius: 100px;
@media only screen and (max-width: 1358px) {
  width: 300px;
  height: 300px;
  border-radius: 30px;
}
`;
const P=styled.p`
color: white;
font-size: 18px;
font-weight: 700;
`;
const CommingSoon=styled.div`
display: flex;
margin: 50px;
@media only screen and (max-width: 1358px) {
  display: block;
}
@media only screen and (max-width: 320px) {
  margin: 10px;
}
`;
const Art=styled.div`
width: 290px;
height: 450px;
border: 5px solid;
border-radius: 30px;
margin: 0 auto;
@media only screen and (max-width: 1358px) {
  margin-top: 30px;
}
@media only screen and (max-width: 320px) {
  width: 250px;
}
`;
const P1=styled.p`
margin: 30px;
text-align: left;
@media only screen and (max-width: 320px) {
  font-size: 14px;
}
`;
const Button=styled.button`
font-size: 15px;
height: 30px;
width: 90px;
background-color: #3d93ad;
color: white;
border-radius: 10px;
border: none;
&:hover{
  cursor: pointer;
  background-color: burlywood;
  color: black;
}
`;