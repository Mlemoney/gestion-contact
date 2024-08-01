import React, { useState, useEffect } from 'react';
import { Button, Input, FormControl, FormLabel, Box, FormErrorMessage } from '@chakra-ui/react';

const ContactForm = ({ addContact, updateContact, selectedContact }) => {
  const [contact, setContact] = useState({
    id: '',
    nom: '',
    prenom: '',
    telephone: '',
    email: ''
  });

  const [errors, setErrors] = useState({
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
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'nom':
        if (!value) error = 'Le nom est requis';
        break;
      case 'prenom':
        if (!value) error = 'Le prénom est requis';
        break;
      case 'telephone':
        if (!value) {
          error = 'Le téléphone est requis';
        } else if (!/^\d+$/.test(value)) {
          error = 'Le téléphone doit être un nombre';
        }
        break;
      case 'email':
        if (!value) {
          error = 'L\'email est requis';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'L\'email est invalide';
        }
        break;
      default:
        break;
    }

    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Valider tous les champs avant d'ajouter ou de mettre à jour
    const newErrors = {};
    for (const key in contact) {
      if (contact.hasOwnProperty(key)) {
        validateField(key, contact[key]);
      }
    }

    // Si il y a des erreurs, ne pas soumettre le formulaire
    if (Object.values(errors).some(error => error)) {
      return;
    }

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
      <FormControl id="nom" mb={4} isInvalid={!!errors.nom}>
        <FormLabel>Nom</FormLabel>
        <Input type="text" name="nom" value={contact.nom} onChange={handleChange} />
        <FormErrorMessage>{errors.nom}</FormErrorMessage>
      </FormControl>
      <FormControl id="prenom" mb={4} isInvalid={!!errors.prenom}>
        <FormLabel>Prénom</FormLabel>
        <Input type="text" name="prenom" value={contact.prenom} onChange={handleChange} />
        <FormErrorMessage>{errors.prenom}</FormErrorMessage>
      </FormControl>
      <FormControl id="telephone" mb={4} isInvalid={!!errors.telephone}>
        <FormLabel>Téléphone</FormLabel>
        <Input type="text" name="telephone" value={contact.telephone} onChange={handleChange} />
        <FormErrorMessage>{errors.telephone}</FormErrorMessage>
      </FormControl>
      <FormControl id="email" mb={4} isInvalid={!!errors.email}>
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" value={contact.email} onChange={handleChange} />
        <FormErrorMessage>{errors.email}</FormErrorMessage>
      </FormControl>
      <Button type="submit" colorScheme="teal">
        {contact.id ? 'Modifier' : 'Ajouter'}
      </Button>
    </Box>
  );
};

export default ContactForm;
