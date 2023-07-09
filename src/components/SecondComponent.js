import React from 'react';
import { styled } from 'styled-components';
import Math from './img/Math.webp';
import Physics1 from './img/Physics1.jpeg';
import programming from './img/programming.jpeg';
import chemistry from './img/chemistry.webp';
const SecondComponent = () => {
  return (
    <div>
        <Line><Span/><Text>Our Courses</Text><Span/></Line>
        <Courses>
        <Subjects>
            <h1>Mathematics</h1>
            <img src={Math} width={200} height={130} alt='Math'></img>
            <P>Do you still think Mathematics is hard to study?
            Our team will take care to make maths your favourite subject.
            Register and find the most resonable prices!
            What are you waiting for?</P>
            <Button>Get Info</Button>
        </Subjects>
        <Subjects>
          <h1>Physics</h1>
          <img src={Physics1} width={200} height={130} alt='Physics1'></img>
          <P>Do you want to know more about the universe and how it is created?
            Register and learn more about universe and the way how it functions. 
            Hurry up to get the offer!</P>
            <Button>Get Info</Button>
        </Subjects>
        <Subjects>
          <h1>Chemistry</h1>
          <img src={chemistry} width={200} height={130} alt='Chemistry'></img>
          <P>Are you looking for a way to improve your skills in chemistry?
            Register and our team will take care for this. 
            Hurry up to get our resonable prices!
          </P>
          <Button>Get Info</Button>
        </Subjects>
        <Subjects>
          <h1>Programming</h1>
          <img src={programming} width={200} height={130} alt='Programming'></img>
          <P>Do you want to learn how to code? You are in the right place.
            We offer courses in Python, html, css, javascript, C#, Java and many other languages.
            Get more info!
          </P>
          <Button>Get Info</Button>
        </Subjects>
        </Courses>
    </div>
  )
}

export default SecondComponent
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
const Subjects=styled.div`
width: 290px;
height: 450px;
border: 5px solid;
border-radius: 30px;
margin: 0 auto;
justify-content: space-between;
@media only screen and (max-width: 1358px) {
  margin-top: 30px;
}
@media only screen and (max-width: 320px) {
  width: 250px;
}
`;
const Courses=styled.div`
display: flex;
padding-left: 50px;
padding-right: 50px;
margin: 0 auto;
justify-content: center;
@media only screen and (max-width: 1358px) {
  display: block;
}
@media only screen and (max-width: 320px) {
  margin: -20px;
}
`;
const P=styled.p`
text-align: left;
margin: 35px;
margin-bottom: 23px;
@media only screen and (max-width: 320px) {
  font-size: 14px;
}
`;
const Button=styled.button`
font-size: 15px;
height: 30px;
width: 70px;
background-color: #3d93ad;
color: white;
border-radius: 8px;
border: none;
&:hover{
  cursor: pointer;
  background-color: burlywood;
  color: black;
}
`;