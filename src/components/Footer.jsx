import { Avatar, Box, Stack, Text, VStack, Link } from "@chakra-ui/react";
import React from "react";
import img1 from '../assets/naruto.jpg';

const avatarSrc = img1;

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      py={"6"}
      px={["6", "16"]}
    >
      <Stack direction={["column", "row"]} alignItems={"center"} spacing={"6"} justify={"space-between"}>
        <VStack alignItems={["center", "flex-start"]} spacing={"4"}>
          <Text fontWeight={"bold"} fontSize={"lg"}>About Us</Text>
          <Text fontSize={"sm"} lineHeight={"tall"}>
            We are the premier crypto trading app in India, offering expert guidance at an unbeatable value.
          </Text>
        </VStack>

        <VStack spacing={"4"}>
          <Avatar boxSize={"14"} src={avatarSrc} />
          <Text fontSize={"sm"} fontFamily={"Bebas Neue"} >CryptoTraders</Text>
        </VStack>
      </Stack>

      <Stack mt={"6"} direction={["column", "row"]} spacing={"6"} alignItems={"center"}>
        <Text fontSize={"sm"} color={"whiteAlpha.500"}>
          &copy; 2024 CryptoTraders. All rights reserved.
        </Text>
        <Stack direction={"row"} spacing={"4"} alignItems={"center"}>
          <Link href={"#"} fontSize={"sm"} color={"whiteAlpha.500"}>Privacy Policy</Link>
          <Link href={"#"} fontSize={"sm"} color={"whiteAlpha.500"}>Terms of Service</Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;