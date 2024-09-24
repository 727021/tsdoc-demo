import { Link, Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Github } from 'react-bootstrap-icons'

const Root = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/" as={Link}>DadJS</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="https://github.com/727021/tsdoc-demo" target="_blank">
                <Github size="24" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="my-4 flex-grow-1 d-flex flex-column">
        <Outlet />
      </Container>
      <div className="bg-body-tertiary py-5">
        <Container className="text-center">
          Jokes from <a href="https://icanhazdadjoke.com/" target="_blank" rel="noreferrer noopener" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">icanhazdadjoke.com</a>
        </Container>
      </div>
    </div>
  )
}

export default Root
