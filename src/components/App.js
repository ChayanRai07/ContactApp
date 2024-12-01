import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import AddContact from './addcontact';
import ContactList from './contactlist';
import ContactDetail from './contactdetail';


function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_KEY_STORAGE = 'constacts';
  const addcontacthandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
    localStorage.setItem(LOCAL_KEY_STORAGE, JSON.stringify([...contacts, contact]));
  };

  const removeContactHandler = (id) => {
    const newcontactlist = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newcontactlist);
    localStorage.setItem(LOCAL_KEY_STORAGE, JSON.stringify(newcontactlist));
  };

  useEffect(() => {
    const retrivecontacts = JSON.parse(localStorage.getItem(LOCAL_KEY_STORAGE));
    if (retrivecontacts) {
      setContacts(retrivecontacts);
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_KEY_STORAGE,JSON.stringify(contacts));
  // },[contacts]);


  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={() => (<ContactList contacts={contacts} getcontactid={removeContactHandler} />)} />
          <Route path="/add" Component={() => (<AddContact addcontacthandler={addcontacthandler} />)} />
          <Route path="/contacts/:id" Component={ContactDetail } />

        </Routes>
        {/* <AddContact addcontacthandler = {addcontacthandler}/>
        <ContactList contacts={contacts} getcontactid = {removeContactHandler}/> */}
      </Router>

    </div>

  );
}

export default App;
