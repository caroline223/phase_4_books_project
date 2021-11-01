import React, { useState, useEffect } from 'react'
import AuthorizedUser from './AuthorizedUser'
import UnauthorizedUser from './UnauthorizedUser'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
      .then(response => {
        if (response.ok) {
          response.json().then((user) => {
            setUser(user)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, [])

  if(!authChecked) {return <div></div>}
  return (
    <Router>
      {user ? (
          <AuthorizedUser
            setUser={setUser}
            user={user}
          />
        ) : (
          <UnauthorizedUser
            setUser={setUser}
          />
        )
      }
    </Router>
  )
}

export default App