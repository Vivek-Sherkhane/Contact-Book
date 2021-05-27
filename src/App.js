import React from 'react';
import Contacts from './components/contacts/Contacts';
import Navbar from './components/elements/Navbar';
import './styles/App.scss';
import {Provider} from 'react-redux';
import store from './store';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';

function App() {
  return (
   <Provider store={store}>
      <BrowserRouter>
        <div className="App">
        <Navbar />
        <div className="container">
          <div className="py-3">
            <Switch>
              <Route exact path="/" component={Contacts}/>
              <Route exact path="/addcontact" component={AddContact}/>
              <Route exact path="/editcontact/:id" component={EditContact} />
            </Switch>
          </div>
        </div>
      </div>
      </BrowserRouter>
   </Provider>
  );
}

export default App;
