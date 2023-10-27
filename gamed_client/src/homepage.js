
import React from 'react';
import './homepage.css';

const App = () => {
  return (
    <div className="container">
      <a href="#menu">
        <h1 style={{ fontSize: '100px', color: '#d4ff59' }}>GamEd. </h1>
      </a>
      <img src="pixilart-drawing (7).png" height="200px" alt="" />
      <div className="popover" id="menu">
        <div className="content">
          <a href="#" className="close"></a>
          <div className="nav">
            <ul className="nav_list">
              <div className="nav_list_item">
                <li><a href="#">Warprep</a></li>
              </div>
              <div className="nav_list_item">
                <li><a href="#">Legends</a></li>
              </div>
              <div className="nav_list_item">
                <li><a href="#">Focalpoint</a></li>
              </div>
              <div className="nav_list_item">
                <li><a href="#">Warzone</a></li>
              </div>
              <div className="nav_list_item">
                <li><a href="#">Signup/login</a></li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
