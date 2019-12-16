import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./componenets/AppNavbar";
import ShoppingList from "./ShoppingList";
import {Provider} from 'react-redux';
import store from './store.js';
import {Container} from 'reactstrap';
import ItemModal from "./componenets/ItemModal";

function App() {
  return (
      <Provider store={store}>
    <div className="App">
      <AppNavbar />
      <Container>
      <ItemModal/>
      <ShoppingList />
      </Container>
    </div>
      </Provider>
  );
}

export default App;
