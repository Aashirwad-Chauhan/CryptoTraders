import React from 'react';
import { Flex, Button, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/head.png';

const Header = () => {
  return (
    <Flex
      p={4}
      bgColor="#1a1a1a" // Set background color to black
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex alignItems="center">
        <Text
          as={Link}
          to="/"
          fontSize="lg"
          fontWeight="bold"
          color="white" // Ensure text is white for visibility
          _hover={{ color: 'cyan.400' }}
          cursor="pointer"
          transition="0.3s ease"
        >
          Home
        </Text>

        <Text
          as={Link}
          to="/exchanges"
          fontSize="lg"
          fontWeight="bold"
          color="white"
          _hover={{ color: 'cyan.400' }}
          cursor="pointer"
          transition="0.3s ease"
          ml={4} // Margin for spacing
        >
          Exchanges
        </Text>

        <Text
          as={Link}
          to="/coins"
          fontSize="lg"
          fontWeight="bold"
          color="white"
          _hover={{ color: 'cyan.400' }}
          cursor="pointer"
          transition="0.3s ease"
          ml={4} // Margin for spacing
        >
          Coins
        </Text>
      </Flex>

      <Image src={logo} alt="Logo" boxSize="60px" />
    </Flex>
  );
};

export default Header;
