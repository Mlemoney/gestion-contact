import React, { useState, useEffect } from 'react';
import { Button, Input, FormControl, FormLabel, Box } from '@chakra-ui/react';

const ContactForm = ({ addContact, updateContact, selectedContact }) => {
  const [contact, setContact] = useState({
    id: '',
    nom: '',
    prenom: '',
    telephone: '',
    email: ''
  });

  useEffect(() => {
    if (selectedContact) {
      setContact(selectedContact);
    }
  }, [selectedContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.id) {
      updateContact(contact);
    } else {
      addContact({ ...contact, id: Date.now().toString() });
    }
    setContact({
      id: '',
      nom: '',
      prenom: '',
      telephone: '',
      email: ''
    });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={4} borderWidth="1px" borderRadius="md">
      <FormControl id="nom" mb={4}>
        <FormLabel>Nom</FormLabel>
        <Input type="text" name="nom" value={contact.nom} onChange={handleChange} />
      </FormControl>
      <FormControl id="prenom" mb={4}>
        <FormLabel>Prénom</FormLabel>
        <Input type="text" name="prenom" value={contact.prenom} onChange={handleChange} />
      </FormControl>
      <FormControl id="telephone" mb={4}>
        <FormLabel>Téléphone</FormLabel>
        <Input type="text" name="telephone" value={contact.telephone} onChange={handleChange} />
      </FormControl>
      <FormControl id="email" mb={4}>
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" value={contact.email} onChange={handleChange} />
      </FormControl>
      <Button type="submit" colorScheme="teal">
        {contact.id ? 'Modifier' : 'Ajouter'}
      </Button>
    </Box>
  );
};

export default ContactForm;
