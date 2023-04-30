import { usePlantsQuery } from "../generated/graphql";
import { Box, Grid, Text } from "@chakra-ui/react";
import { PlantItem } from "./PlantItem";

export const PlantList = () => {
  const plants = usePlantsQuery({
    fetchPolicy: "network-only",
  });
  return (
    <>
      {plants.error && (
        <Box>
          <Text fontSize="md">Error: {plants.error.message}</Text>
        </Box>
      )}
      {plants.loading && (
        <Box>
          <Text fontSize="md">Loading...</Text>
        </Box>
      )}
      <Grid gap={2}>
        {plants.data?.plants.map((plant) => (
          <PlantItem key={plant.id} plant={plant} />
        ))}
      </Grid>
    </>
  );
};
