import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import './Home.scss'

const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
      <div className='home__container overflow-hidden shadow-2xl bg-base-100 flex'>
        <Sidebar/>
        <Chat/>

      </div>
    </div>
    </div>
  )
}

export default Home