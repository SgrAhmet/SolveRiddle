import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link className='link' to="/riddle">riddle</Link>
        <Link className='link' to="/riddle2">riddle2</Link>
        

    </div>
  )
}

export default Home