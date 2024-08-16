// import React from 'react';
import logo from '../../assets/logo.png';
import { Logo } from "./Loader.styled";

export const Loader = () => {
  return (
    <>
    <Logo src={logo} alt='Spinning loader' height={64} width={64}></Logo>
    <div>Loading...</div>
    </>
  )
}
