import React from 'react'

const Main = ({user}) => {
  return (
    <section className='main'>
      <label>
        <p>username:</p>
        <p>{user[0]?.name}</p>
      </label>
      <label>
        <p>email:</p>
        <p>{user[0]?.email}</p>
      </label>
      <label>
        <p>address:</p>
        <p>{user[0]?.address?.street}</p>
      </label>
      <label>
        <p>phone:</p>
        <p>{user[0]?.phone}</p>
      </label>
    </section>
  )
}

export default Main