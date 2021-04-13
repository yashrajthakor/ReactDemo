import React from 'react';
import { NavLink } from 'react-router-dom';
import Web from '../src/img/1.svg';
import Common from './Common';

const Home = ()=> {
  return (
    <>
    <Common 
    name="Grow your bussines with" 
    imgsrc={Web} 
    visit="/service" 
    btname="Get Started"/>
    </>
  );
}

export default Home;
