import React from 'react';
import { NavLink } from 'react-router-dom';
import Web from '../src/img/2.svg';
import Common from './Common';

const About = ()=> {
  return(
    <>
    <Common 
    name="Welcome to About Page" 
    imgsrc={Web} 
    visit="/contact" 
    btname="Contact Now"/>
    </>
  ) ; 
}

export default About;
