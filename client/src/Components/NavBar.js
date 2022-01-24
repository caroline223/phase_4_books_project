import React from 'react'
import { useHistory } from 'react-router'

import {
  Container,
  Dropdown,
  Menu
} from 'semantic-ui-react'

function NavBar({ setUser }) { 

  const history = useHistory()

  const clickLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then((response) => {
        if (response.ok) {
          setUser(null) 
          history.push('/logout')
        }
      })
  }
  
  return(
    <div>
    <Menu fixed='top' style={{backgroundColor: "lavender"}}>
      <Container>
        <Menu.Item as='a' header>
          Simply Books
        </Menu.Item>
        
        <Dropdown item simple text='Options'>
          <Dropdown.Menu>
            <Dropdown.Item  href="/books">Featured Books</Dropdown.Item>
            <Dropdown.Item  href="/authors">Featured Authors</Dropdown.Item>
            <Dropdown.Item  href="/mylibrary">Personal Library</Dropdown.Item>
            <Dropdown.Item  href="/users/user-info">Account Information</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item onClick={clickLogout}>Logout</Menu.Item>
      </Container>
    </Menu>
   
  </div>
  )

}
  

export default NavBar