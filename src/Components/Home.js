import React from 'react'
import { useHistory } from 'react-router-dom'

function Home () {
  const history = useHistory()

  let user = localStorage.getItem('user')
  if (!user) {
    history.push('/login')
  }
  return <div>Home</div>
}

export default Home