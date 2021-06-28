import React, { useState } from 'react';
// import Nav from './Nav'
import NavTabs from './NavTabs';
import Home from './Home/Home';
import About from './About/About';
import Resume from './Resume/Resume';
import Contact from './Contact/Contact';
import Portfolio from './Portfolio/Portfolio';
import Footer from './Footer/Footer';


function Nav(props) {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    console.log(currentPage)
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      // default: 
      //   return <p>route not found</p>
    }
  }

  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;


  return (

    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> </span>  Janell Myrick
        </a>
      </h2>
      <nav></nav>
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        <div>
          {
            renderPage()
          }
        </div>
      </div>
      </header>



  );
};

export default Nav;
