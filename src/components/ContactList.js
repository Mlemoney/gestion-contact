import React from 'react';
import { Box, Text, Stack, Heading } from '@chakra-ui/react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, setSelectedContact, deleteContact }) => {
  const handleDetails = (contact) => {
    setSelectedContact(contact);
  };

  const handleEdit = (contact) => {
    setSelectedContact(contact);
  };

  const handleDelete = (id) => {
    deleteContact(id);
  };

  return (
    <Box p={4} maxW="md" mx="auto" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Heading as="h2" size="lg" mb={4} textAlign="center">Liste des Contacts</Heading>
      {contacts.length > 0 ? (
        <Stack spacing={4}>
          {contacts.map(contact => (
            <ContactItem 
              key={contact.id} 
              contact={contact} 
              onDetails={handleDetails} 
              onEdit={handleEdit} 
              onDelete={handleDelete} 
            />
          ))}
        </Stack>
      ) : (
        <Text align="center">Aucun contact disponible</Text>
      )}
    </Box>
  );
};

export default ContactList;
