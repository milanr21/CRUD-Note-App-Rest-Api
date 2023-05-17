// import React, { useState, useEffect } from 'react';
import Note from '../components/Note';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import AddUpdate from './AddUpdate';

const Home = () => {
  return (
    <div className='Home notes'>
      <Note />
      <AddUpdate />
    </div>
  );
};

export default Home;
