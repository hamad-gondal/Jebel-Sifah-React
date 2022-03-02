import React from 'react';
import './App.scss';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import List from './components/list/list'

function App() {
  return (
    <div className="app">
      <Header />
      <List />
      <Footer />
    </div>
  );
}

export default App;
