import React, { useEffect } from 'react';
import {  Navbar, Nav, Container } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Nav'

function AppNav(props) {
  const {
    setCurrentItem,
    currentItem
  } = props;

  useEffect(() => {
    document.title = currentItem;
  }, [currentItem]);
  console.log(currentItem)

  return (
    <Navbar className="navbarmobile" expand='lg'>
      <Container fluid>
        <nav className="navbar" role="navigation">
          <div className="navbar-brand">
            <h1 className="nav-title grad is-black">Janell Myrick</h1>
          </div>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <div id="navbar" className="navbar-menu is-active grad">
                <div className="navbar-start grad">
                  <li className="navbar-item grad">
                    <a className="navbar-item grad">
                      <span className="grad" onClick={() => setCurrentItem("About")}>
                        About Me <i class="fas fa-user grad"></i>
                      </span>
                    </a>
                  </li>
                  <li className="navbar-item grad">
                    <a className="navbar-item grad">
                      <span className="grad" onClick={() => setCurrentItem("Portfolio")}>
                        Portfolio <i class="fas fa-folder-open grad"></i>
                      </span>
                    </a>
                  </li>
                  <li className="navbar-item grad">
                    <a className="navbar-item grad">
                      <span className="grad" onClick={() => setCurrentItem("Resume")}>
                        Resume <i class="fas fa-file grad"></i>
                      </span>
                    </a>
                  </li>
                  <li className="navbar-item grad">
                    <a className="navbar-item grad">
                      <span className="grad" onClick={() => setCurrentItem("Contact")}>
                        Contact <i class="fas fa-comments grad"></i>
                      </span>
                    </a>
                  </li>

                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
          </nav >
        </Container>
      </Navbar>
 
  )
}

export default AppNav;