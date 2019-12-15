import React from 'react';

import './styles.css';

const Header = () => ( 
  <header>
  <div className="center">
    <h1>Voltax Studios</h1>
    <a href="#" className="menu" onclick="function() {
      this.classList.toggle('open');
    }">
      <i className="fa fa-bars" />
    </a>
    <nav>
      <a href="#">Inicio</a>
      <a href="#">Sobre</a>
      <a href="#">Comunidade</a>
      <a href="#">Blog</a>
      <a href="#" className="nav-btn">Entrar</a>
    </nav>
  </div>
</header>

);

export default Header;