import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  const [user, setUser] = useState([])
  const id = 1

  const fetchData = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/users?id=${id}`,
      )
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUser(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='App'>
      <Header user={user}/>
      <Main user={user}/>
    </div>
  )
}

export default App