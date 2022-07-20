import React from "react";
import styled from "styled-components";

import Logo from "../../img/logo.png";

const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 4rem;
  position: relative;
`;

const AuthLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const WebName = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;

const LogoImg = styled.img`
  width: 4rem;
  height: 4rem;
`;

const Name = styled.h1`
  font-size: 3rem;
  background-color: red;
  background-image: var(--buttonBg);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -mozilla-background-clip: text;
  -mozilla-text-fill-color: transparent;
`;

const Desc = styled.h6`
  font-size: 0.85rem;
`;

const Auth = () => {
  return (
    <AuthContainer>
      <AuthLeft>
        <LogoImg src={Logo} alt='' />
        <WebName>
          <Name>Kimura Inc.</Name>
          <Desc>Explore the ideas throughout the World.</Desc>
        </WebName>
      </AuthLeft>
      <SignUp />
    </AuthContainer>
  );
};

const AuthRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const Heading = styled.h3``;

const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  height: 2rem;
  width: 100%;
`;

const AuthInput = styled.input`
  border: none;
  outline: none;
  background-color: var(--inputColor);
  border-radius: 8px;
  padding: 20px;
  flex: 1;
`;

const UserName = styled.div`
  display: flex;
  gap: 1rem;
  height: 2rem;
  width: 100%;
`;

const Password = styled.div`
  display: flex;
  gap: 1rem;
  height: 2rem;
  width: 100%;
`;

const SpanBtnContainer = styled.div` */
`;

const Account = styled.span`
  font-size: 12px;
`;

const SignInBtn = styled.button`
  width: 6rem;
  height: 2rem;
  align-self: flex-end;
`;

function SignUp() {
  return (
    <AuthRight>
      <SignUpForm className='authForm'>
        <Heading>Sign Up</Heading>
        <InputContainer>
          <AuthInput type='text' placeholder='First Name' name='firstname' />
          <AuthInput type='text' placeholder='Last Name' name='lastname' />
        </InputContainer>
        <UserName>
          <AuthInput type='text' placeholder='User Name' name='username' />
        </UserName>
        <Password>
          <AuthInput type='text' placeholder='Enter Password' name='password' />
          <AuthInput
            type='text'
            placeholder='Confirm Password'
            name='confirm-password'
          />
        </Password>
        <SpanBtnContainer>
          <Account>Already have an account?? Login!</Account>
        </SpanBtnContainer>
        <SignInBtn className='button' type='submit'>
          Login
        </SignInBtn>
      </SignUpForm>
    </AuthRight>
  );
}

export default Auth;
