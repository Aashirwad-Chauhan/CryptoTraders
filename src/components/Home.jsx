import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box
      bgColor={"#1a1a1a"}
      w={"full"}
      h={"100vh"}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <motion.div
        style={{
          height: "50vh",
          width: "50vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"120%"}
          h={"120%"}
          objectFit={"contain"}
          src={btcSrc}
          filter={"grayscale(1) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"bold"}
        color={"white"}
        mt={"2rem"}
        textShadow="2px 2px 2px rgba(0, 0, 0, 0.5)"
      >
        Welcome to CryptoTraders
      </Text>
      <Text
        fontSize={"xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"gray.300"}
        mt={"1rem"}
      >
        Empowering your journey in cryptocurrency trading.
      </Text>
    </Box>
  );
};

export default Home;
