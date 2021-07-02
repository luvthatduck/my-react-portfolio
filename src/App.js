import React, { useState } from 'react';
import './assets/styles.css';

import About from './components/About/About';
// import PortfolioContainer from './components/PortfolioContainer'
import Contact from '../src/components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Home from './components/Home/Home'
import AppNav from './components/Nav';


function App() {
  const [currentItem, setCurrentItem] = useState("About");
  const [navItems] = useState([
    {
      name: 'Portfolio',
      description: 'A list of projects I have built or contributed to.'
    },
    {
      name: 'Contact',
      description: 'Contact information'
    },
    {
      name: 'Resume',
      description: 'A link to download my resume.'
    }
  ]);

  const displayPage = () => {
    switch (currentItem) {
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
      default:
        return <Home/>
    }
  }

  return (
    <div>
      <AppNav
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      ></AppNav>
      <div>
        <main>
          {displayPage()}
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}

// const App = () => <PortfolioContainer />;

export default App;