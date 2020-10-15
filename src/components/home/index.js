// Dependencies
import React from 'react';

const Home = ({ data }) => (
  <li>
    <span>{`name : ${data.name} | `}</span>
    <span>{`phone : ${data.phone}`}</span>
  </li>
);

export default Home;
