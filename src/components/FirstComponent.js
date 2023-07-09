import React from 'react'
import courses from './img/courses.webp'
import { styled } from 'styled-components'
const FirstComponent = () => {
  return (
    <div>
        <Header>
            <nav>
                <UlStyle>
               <List><a href='FirstComponent.js'>Home</a></List>
                <List><a href='SecondComponent.js'>Our Courses</a></List>
               <List><a href='FourthComponent.js'>Sign In</a></List>
                <List><a href='FifthComponent.js'>About Us</a></List>
                </UlStyle>
            </nav>
            <H1>Knowledge is Power</H1>
            <H2>Join Our Courses!</H2>
            <H2>Make your future better!</H2>
            <Button>Learn More</Button>
        </Header>
    </div>
  )
}

export default FirstComponent
const UlStyle=styled.ul`
display: flex;
justify-content: flex-end;
margin-right: 50px;
`;
const List=styled.li`
list-style: none;
a{
  text-decoration: none;
margin: 25px;
color: white;
}
@media only screen and (max-width: 1358px) {
 a{
  color: chocolate;
  font-weight: 700;
 }
}
`;
const Header=styled.header`
background: url(${courses});
overflow: hidden;
float: top;
top: 0;
left: 0;
width: 100%; 
height: 550px;
`;
const H1=styled.h1`
text-align: center;
font-size: 80px;
color: #3d93ad;
font-family: fantasy;
@media only screen and (max-width: 1358px) {
  font-size: 40px;
  margin-top: 200px;
}
`;
const H2=styled.h2`
color: white;
margin-top: -20px;
font-size: 40px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
text-align: center;
@media only screen and (max-width: 1358px) {
 display: none;
}
`;
const Button=styled.button`
height: 35px;
font-size: 15px;
background-color: #3d93ad;
color: white;
border-radius: 10px;
border: none;
&:hover{
  cursor: pointer;
  background-color: white;
  color: black;
}
@media only screen and (max-width: 1358px) {
 margin-top: 50px;
}
`;