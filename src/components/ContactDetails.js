import React from 'react';
import { Box, Text, Heading, Button, Stack } from '@chakra-ui/react';

const ContactDetails = ({ contact, updateContact }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md" maxW="md" mx="auto" mt={4}>
      <Heading as="h2" size="lg" mb={4} textAlign="center">Détails du contact</Heading>
      <Stack spacing={2}>
        <Text><strong>Nom:</strong> {contact.nom}</Text>
        <Text><strong>Prénom:</strong> {contact.prenom}</Text>
        <Text><strong>Téléphone:</strong> {contact.telephone}</Text>
        <Text><strong>Email:</strong> {contact.email}</Text>
      </Stack>
      
    </Box>
  );
};

export default ContactDetails;
