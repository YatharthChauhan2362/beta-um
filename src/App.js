import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import MainContent from './components/MainContent';

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
