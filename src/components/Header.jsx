import React from 'react'

const Header = ({user}) => {
  return (
    <>
      <section className='header'>
        <h1>Cinta Coding</h1>
        <p>Post</p>
        <h1 
          title="Detail Profile" 
          className='tooltip'>Welcome, <span>{user[0]?.username}</span>
        </h1>
      </section>
    </>
  )
}

export default Header