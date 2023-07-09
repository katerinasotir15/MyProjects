import React,{useState} from 'react'
import { styled } from 'styled-components';

const FourthComoponent = () => {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const printValues=(e)=>{
    e.preventDefault();
    console.log(email, password);
  }
  return (
    <div>
      <Line><Span/><Text>Sign In</Text><Span/></Line>
      <SignIn>
      <Form onSubmit={printValues}>
        <label>Email</label><br></br>
        <input type='email' value={email}
        onChange={event=>setEmail(event.target.value)} name='email'></input><br></br>
        <label>Password</label><br></br>
        <input type='password' value={password}
        onChange={event=>setPassword(event.target.value)} name='passw'></input><br></br>
        <Button>Sign In</Button>
      </Form>
      </SignIn>
    </div>
  )
}

export default FourthComoponent
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
margin:40px;
font-weight: bold;
font-size: 70px;
color: #3d93ad;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
@media only screen and (max-width: 768px) {
  font-size: 20px;
}
`;
const SignIn=styled.div`
margin: 0 auto;
justify-content: center;
border: 4px solid;
border-color: burlywood;
border-radius: 30px;
width: 500px;
height: 450px;
@media only screen and (max-width: 1115px){
  width: 400px;
}
@media only screen and (max-width: 445px){
  width: 300px;
}
`;
const Form=styled.form`
text-align: left;
margin: 50px;
margin-top: 70px;
input{
  border-radius: 20px;
  height: 45px;
  width: 400px;
  margin-bottom: 50px;
  margin-top: 20px;
}
label{
  font-size: 20px;
  margin-left: 10px;
  font-weight: 600;
}
@media only screen and (max-width: 1115px){
  input{
    width: 300px;
  }
  @media only screen and (max-width: 445px){
 input{
  width: 200px;
 }
}
}
`;
const Button=styled.button`
width: 400px;
height: 45px;
text-align: center;
border-radius: 20px;
background-color: #3d93ad;
border: none;
color: white;
font-size: 20px;
font-weight: 700;
@media only screen and (max-width: 1115px){
 width: 300px;
}
@media only screen and (max-width: 445px){
  width: 200px;
}
&:hover{
  cursor: pointer;
  box-shadow: 5px 5px 5px 5px grey;
}
`;