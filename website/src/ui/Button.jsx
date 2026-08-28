// import React from 'react'
/* eslint-disable react/prop-types */

import { Button as ChakraBtn } from "@chakra-ui/react";

const Button = ({
  maxW,
  minW,
  text,
  bg,
  border,
  color,
  px,
  py,
  hoverBg,
  hoverColor,
  fontSize,
  textTransform,
  display,
  disabled,
  type,
  onClick,
  mt,
}) => {
  return (
    <ChakraBtn
      bg={bg ?? "purple"}
      color={color ?? "#fff"}
      borderRadius={"5px"}
      border={border ?? "none"}
      textAlign={"center"}
      px={px ?? "6px"}
      py={py ?? "6px"}
      fontFamily={"nunito"}
      textTransform={textTransform ?? "uppercase"}
      fontSize={fontSize ?? "18px"}
      // fontFamily={'nunito'}
      w={"100%"}
      display={display ?? "flex"}
      isDisabled={disabled}
      maxW={maxW ?? "180px"}
      minW={minW ?? "170px"}
      _hover={{
        bg: hoverBg ?? "orange",
        color: hoverColor,
        transform: "scale(1.02)",
      }}
      type={type}
      onClick={onClick}
      mt={mt}
    >
      {text}
    </ChakraBtn>
  );
};

export default Button;
