import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './styles/main.scss';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <main>
          <AppRoutes/>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
