import React from 'react';
import { styled } from 'styled-components';
import students from './img/students.png';
const FifthComponent = () => {
  return (
    <div>
         <Line><Span/><Text>About Us</Text><Span/></Line>
         <Background>
         <About>
          <Description>
          <P>The first course we offered was in Mathematics. One year later we started offering
            courses in Physics and Programming. We are located in Tirana, Durres, Korca and Shkodra. 
            Very soon we are prepairing new courses in the art field. Our academy has won a number of prices. 
          </P>
          <Circle>
          <h1>Since 2016</h1>
          </Circle>
          </Description>
          <Image>
         <img src={students} width={400} height={550} alt='About Us'></img>
         </Image>
         </About>
         </Background>
    </div>
  )
}

export default FifthComponent
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
const About=styled.div`
display: flex;
background-color: white;
width: 900px;
height: 600px;
margin: auto;
justify-content: center;
position: relative; 
 top: 50%;
transform: translate(0%, -50%); 
box-shadow: 8px 8px 8px 8px grey;
@media only screen and (max-width: 1358px) {
    width: 300px;
    height: 400px;
    display: flex;
    justify-content: center;
    img{
      width: 150px;
      height: 180px;
    }
}
`;
const Background=styled.div`
background-color: #c6d5ed;
height: 800px;
overflow: hidden;
`;
const Image=styled.div`
width: 750px;
height: 500px;
background-color: rgb(187,51,133);
border-radius: 50%;
@media only screen and (max-width: 1358px){
  width: 150px;
  height: 150px;
}
`;
const Circle=styled.div`
width: 200px;
height: 200px;
background-color:  rgb(255,191,0);
border-radius: 50%;
position: relative;
top: 20%;
left: 50%;
transform: translate(-30%, -40%);
h1{
  font-size: 40px;
  color: white;
  padding-top: 33px;
}
@media only screen and (max-width: 1358px){
  width: 150px;
  height: 150px;
  h1{
    font-size: 30px;
    padding-top: 30px;
  }
}
`;
const Description=styled.div`
width: 600px;
`;
const P=styled.p`
margin-top: 60px;
margin-left: 50px;
font-size: 20px;
text-align: left;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-weight: 600;
@media only screen and (max-width: 1358px){
  font-size: 10px;
  margin-top: 20px;
  margin-left: 20px;
}
`;