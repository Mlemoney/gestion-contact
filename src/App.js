import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import ContactDetails from './components/ContactDetails';
import { UserProvider } from './UserContext';
import Navbar from './components/pages/Navbar';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    // Charger les contacts depuis le serveur
    axios.get('http://localhost:5000/contacts')
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error('Il y a eu une erreur!', error);
      });
  }, []);

  const addContact = (contact) => {
    axios.post('http://localhost:5000/contacts', contact)
      .then(response => {
        setContacts([...contacts, response.data]);
      })
      .catch(error => {
        console.error('Il y a eu une erreur!', error);
      });
  };

  const updateContact = (updatedContact) => {
    axios.put(`http://localhost:5000/contacts/${updatedContact.id}`, updatedContact)
      .then(response => {
        setContacts(
          contacts.map(contact => contact.id === updatedContact.id ? updatedContact : contact)
        );
        setSelectedContact(null);
      })
      .catch(error => {
        console.error('Il y a eu une erreur!', error);
      });
  };

  const deleteContact = (contactId) => {
    axios.delete(`http://localhost:5000/contacts/${contactId}`)
      .then(() => {
        setContacts(contacts.filter(contact => contact.id !== contactId));
      })
      .catch(error => {
        console.error('Il y a eu une erreur!', error);
      });
  };

  return (
    <ChakraProvider>
      <UserProvider>
        <Box className="app">
          <Navbar />
          <Container maxW="container.md" mt={4}>
            <ContactForm addContact={addContact} updateContact={updateContact} selectedContact={selectedContact} />
            <ContactList contacts={contacts} setSelectedContact={setSelectedContact} deleteContact={deleteContact} />
            {selectedContact && (
              <ContactDetails contact={selectedContact} updateContact={updateContact} />
            )}
          </Container>
        </Box>
      </UserProvider>
    </ChakraProvider>
  );
};

export default App;
