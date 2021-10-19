import React from 'react'
import {
  Container,
  Dropdown,
  Menu
} from 'semantic-ui-react'

const FixedMenuLayout = () => (
  <div>
    <Menu fixed='top' style={{backgroundColor: "lavender"}}>
      <Container>
        <Menu.Item as='a' header>
          Simply Books
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>

        <Dropdown item simple text='Options'>
          <Dropdown.Menu>
            <Dropdown.Item a href="http://localhost:4000/books">Featured Books</Dropdown.Item>
            <Dropdown.Item a href="http://localhost:4000/authors">Featured Authors</Dropdown.Item>
            <Dropdown.Item a href="http://localhost:4000/login">Login</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

   
  </div>
)

export default FixedMenuLayout