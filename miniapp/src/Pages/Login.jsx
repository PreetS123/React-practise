import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const Login = () => {
 const [flag,setFlag]= useState(false);
 const [loginData,setLoginData]= useState({});
 const navigate= useNavigate();
 
  // let api='https://masai-api-mocker.herokuapp.com/users';
  // `https://login-backend1.herokuapp.com/users`
  
  const handleInput=(e)=>{
     const {name,value}= e.target;
     setLoginData({...loginData,[name]:value});
  }
  const handleLogin=async()=>{
      let data= await fetch(`https://login-backend1.herokuapp.com/users`).then(r=>r.json());
      data.map((item)=>{
        if(item.email===loginData.email && item.password===loginData.password){
          alert('login successfull')
          navigate('/');
        }
        else{
          setFlag(!flag);
        }
      })
  }

  return (
    <LoginDivWrapper>
      <LoginDiv>
        <LoginImage>
          <ImageWrapper src="https://images.meesho.com/images/marketing/1631722939962.webp" alt="MEESHO" />
        </LoginImage>
        <h3>Login to enjoy your shopping</h3>
        <form>
            <FormWrapper>

              <FormDiv>
                <InsideDiv>
                <label htmlFor="email">Email</label>
                </InsideDiv>
               <InsideDiv>
               <InputWrapper type="email" name='email' onChange={handleInput}  />
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
                <ButtonDiv onClick={handleLogin} >LOGIN</ButtonDiv>
              </FormButtonDiv>
            </FormWrapper>
        </form>
      </LoginDiv>
    </LoginDivWrapper>
  )
}


const LoginDivWrapper=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:30px;
    color:#F913B3;
    font-weight:900;
`;

const LoginDiv=styled.div`
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

const LoginImage=styled.div`
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