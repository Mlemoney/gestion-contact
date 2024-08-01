import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const ContactItem = ({ contact, onDetails, onEdit, onDelete }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md" mb={4}>
      <Text>{contact.nom} {contact.prenom} - {contact.telephone}</Text>
      <Button onClick={() => onDetails(contact)} colorScheme="blue" mr={2}>Détails</Button>
      <Button onClick={() => onEdit(contact)} colorScheme="yellow" mr={2}>Modifier</Button>
      <Button onClick={() => onDelete(contact.id)} colorScheme="red">Supprimer</Button>
    </Box>
  );
};

export default ContactItem;
