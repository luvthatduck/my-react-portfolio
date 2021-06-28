import React, { useEffect } from 'react';



function Nav(props) {
  const {
    setCurrentItem,
    currentItem
  } = props;

  useEffect(() => {
    document.title = currentItem;
  }, [currentItem]);
  console.log(currentItem)

  return (

    <nav className="navbar" role="navigation">

      <div className="navbar-brand">
        <h1 className="nav-title grad is-black">Janell Myrick</h1>
      </div>
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
    </nav >
  )
}

export default Nav;