// src/components/Navbar.js
import React from 'react';
import { Box, Flex, Heading, Spacer, Button, useColorMode, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg="teal.500" px={4} py={2} boxShadow="md">
      <Flex alignItems="center">
        <Heading as="h1" size="lg" color="white">
          Gestion de Contacts
        </Heading>
        <Spacer />
        <InputGroup maxW="300px" mr={4}>
          <Input placeholder="Rechercher un contact" bg="white" />
          <InputRightElement children={<SearchIcon color="gray.300" />} />
        </InputGroup>
        <Button onClick={toggleColorMode} colorScheme="teal" variant="outline" size="sm">
          {colorMode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
