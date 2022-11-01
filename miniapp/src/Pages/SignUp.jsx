import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

export const SignUp = () => {
  const [signup,setSignup]= useState({});
  const navigate= useNavigate();

  let api= 'https://masai-api-mocker.herokuapp.com/auth/register';
   
   const SignupPost=()=>{
       fetch(api,{
        method:'POST',
        body:JSON.stringify(signup),
        headers:{
          'content-type':'application/json'
        }
       })
       alert('SignUp Done')
        navigate('/login')
   }

  const handleSubmit=()=>{
    
     SignupPost();
  }

  const handleInput=(e)=>{
   const {name,value}= e.target;
   setSignup({...signup,[name]:value});
  }
  return (
    <SignUpWrapper>
      <SignUpDiv>
        <SignUpImg>
          <ImageWrapper src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="MEESHO" />
        </SignUpImg>
        <h3>SignUp to view your profile</h3>
        <form onSubmit={handleSubmit}>
            <FormWrapper>
              <FormDiv>
                <InsideDiv>
                <label htmlFor="username">User Name</label>
                </InsideDiv>
                  <InsideDiv>
                  <InputWrapper type="text" name='username'  onChange={handleInput} />
                  </InsideDiv>
               
              </FormDiv>
              <FormDiv>
                <InsideDiv>
                <label htmlFor="email">Email</label>
                </InsideDiv>
               <InsideDiv>
               <InputWrapper type="email" name='email'  onChange={handleInput} />
               </InsideDiv>

              </FormDiv>
              <FormDiv>
                <InsideDiv>
                <label htmlFor="password">Password</label>
                </InsideDiv>
               <InsideDiv>
               <InputWrapper type="password" name='password' onChange={handleInput}  />
               </InsideDiv>
               
              </FormDiv>
              <FormButtonDiv>
                <ButtonDiv type='submit' >SUBMIT</ButtonDiv>
              </FormButtonDiv>
            </FormWrapper>
        </form>
      </SignUpDiv>
    </SignUpWrapper>
  )
}


const SignUpWrapper=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:30px;
    color:#F913B3;
    font-weight:900;
`;

const SignUpDiv=styled.div`
width:30%;
height:fit-content;
padding:2%;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
gap:30px;
border:1px solid black;
margin:50px 0px;
`;

const SignUpImg=styled.div`
  flex:2;
`;
const ImageWrapper=styled.img`
 width:100%;
 height:100%;
`;

const FormWrapper=styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
gap:30px;
`;

const FormDiv= styled.div`
width:100%;
display:flex;
justify-content:space-around;
align-items:start;
gap:30px;
text-align:start;
`;

const InsideDiv=styled.div`
display:flex;
justify-content:start;
align-items:start;
font-size:15px;

`;

const InputWrapper=styled.input`
height:30px;
padding:1% 2%;
border-radius:10px;
border:2px solid pink;
`;
const FormButtonDiv=styled.div`
width:100%;
`;

const ButtonDiv=styled.button`
width:100%;
height:40px;
background-color:#F913B3;
border:none;
border-radius:20px;
color:white;
font-weight:600;
font-size:20px;
padding:1%;
`;