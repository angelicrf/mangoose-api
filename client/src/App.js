import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./componenets/AppNavbar";
import ShoppingList from "./ShoppingList";
import {Provider} from 'react-redux';
import store from './store.js';

function App() {
  return (
      <Provider store={store}>
    <div className="App">
      <AppNavbar />
      <ShoppingList />
    </div>
      </Provider>
  );
}

export default App;
