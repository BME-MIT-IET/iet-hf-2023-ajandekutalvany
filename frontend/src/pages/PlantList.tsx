import { Container, Stack, Text } from "@chakra-ui/react";
import { AddPlant } from "../components/AddPlant";
import { PlantList } from "../components/PlantList";

export const PlantListPage = () => {
  return (
    <Container height="100vh">
      <Stack height="100%" padding={4}>
        <Text fontSize="2xl" textAlign="center">
          IET HF Plant Tracker
        </Text>
        <PlantList />
        <AddPlant />
      </Stack>
    </Container>
  );
};
