import React from 'react';
import Search from './components/Search/Search';
import './App.css';

export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="app">
        <Search />
      </div>
    );
  }
}
