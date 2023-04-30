import { Box } from "@chakra-ui/react";
import React from "react";

export const TextLine = (props: { label: string; value: string }) => (
  <Box display="flex" alignItems="baseline">
    {props.label}
    <Box
      color="gray.500"
      fontWeight="semibold"
      letterSpacing="wide"
      fontSize="xs"
      textTransform="uppercase"
      ml="2"
    >
      {props.value}
    </Box>
  </Box>
);
