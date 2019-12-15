import React from 'react';
import './styles.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/main';

const App = () => (
  <div className="App">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
