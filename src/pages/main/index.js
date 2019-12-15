import React from 'react';

import './styles.css';

const Main = () => (

  <div>
    <section className="banner">
      <div className="center">
        <div className="banner-text">
          <h1>Bem vindo!</h1>
          <p>Voltax Studios, desenvolvimentos web, mobile, designers e cursos.</p>
          <div className="banner-links">
            <a href="#" className="banner-btn">
              Mais informações
                  <i className="fa fa-rocket" />
            </a>
          </div>
        </div>
        <img src="img/melhores-tecnologias.svg" alt="" className="banner-img" />
      </div>
    </section>
    <section className="community">
      <div className="center">
        <div className="community-text">
          <h1>Participe da nossa comunidade no Discord!</h1>
          <p>Potencialize o seu aprendizado, destaque-se entre os programadores e ganhe prêmios exclusivos.</p>
          <div className="community-links">
            <a href="#" className="community-btn">
              Acessar comunidade
                </a>
          </div>
        </div>
        <img src="img/discord.svg" alt="" />
      </div>
    </section>
  </div>

);

export default Main;