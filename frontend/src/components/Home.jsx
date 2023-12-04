import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <h1>Namastey!!</h1>
        <Link to="/items"><h3>Items</h3></Link>
    </>
  )
}

export default Home;
