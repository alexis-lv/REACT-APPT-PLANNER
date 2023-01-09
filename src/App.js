import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { useState } from "react";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
 const [contacts, setContacts] = useState([
  { name: 'Bryan', number: 7028836373, email: 'bryan@gmail.com' },
  { name: 'James', number: 7022835196, email: 'jamesb@gmail.com'},
  { name: 'Farah', number: 7028695288, email: 'farahs@gmail.com'},
  { name: 'Nadia', number: 7023259818, email: 'nadia@gmail.com'}
 ]);
 const [appointments, setAppointments] = useState([
  { title: 'Work meeting', contact: 'Bryan', date: 'Tuesday', time: '7:30pm' },
  { title: 'Soccer Practice', contact: 'James', date: 'Sunday', time: '3:00pm' },
  { title: 'Christmas Party', contact: 'Farah', date: 'Friday', time: '8:00pm'}
 ]);


  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };


  const addContact = (name, number, email) => {
    setContacts([...contacts, { name: name, number: number, email: email }])
  }

  const addAppointment = (title, contact, date, time) => {
    const newAppt = { title: title, contact: contact, date: date, time: time };
    setAppointments([...appointments, newAppt]);
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contacts}
                          addContact={addContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage contacts={contacts}
                              appointments={appointments}
                              addAppointment={addAppointment}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;