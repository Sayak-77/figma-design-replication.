import React from 'react';
import '../styles/buttonstyles.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='sign-up'>
      <button className='btn'>Book A Demo</button>
    </Link>
  );
}