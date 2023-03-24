import { Avatar, Box, Stack, Text, VStack , Link} from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://cdn.vectorstock.com/i/preview-1x/68/97/programmer-computer-expert-rgb-color-icon-vector-37206897.jpg";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
           In this app we provide all information related to crypto currency. 
          </Text>
          <Text fontWeight={"bold"}>Contact Creator</Text>
          <Text> Email id : prakharmohanjain@gmail.com</Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text 
          noOfLines={1}
          >Author:PrakharJain</Text>
          <Link>Linkdin</Link>
         
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
