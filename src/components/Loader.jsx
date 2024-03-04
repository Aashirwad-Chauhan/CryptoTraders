import React from 'react'
import {Box, VStack, Spinner, Text} from '@chakra-ui/react';

const Loader = () => {
  return (
    <VStack
        h="90vh"
        justifyContent={'center'}
    > 
        <Box
            transform={"scale(3)"}
        >
            <Spinner size={'xl'} />
            <Text> Loading... </Text>
        </Box>
        
    </VStack>
  )
}

export default Loader;
