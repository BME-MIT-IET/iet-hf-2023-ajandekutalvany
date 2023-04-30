import { IconButton, useDisclosure } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { PlantsDocument, useAddPlantMutation } from "../generated/graphql";
import React, { useState } from "react";
import { PlantModal } from "./PlantModal";

export const AddPlant = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState<string | null>(null);
  const [waterFrequency, setWaterFrequency] = useState<number | null>(null);

  const [addPlant] = useAddPlantMutation({
    refetchQueries: [PlantsDocument],
  });

  return (
    <>
      <PlantModal
        submitText="Add"
        headerText="Add new plant"
        open={isOpen}
        onClose={onClose}
        onChangeName={(e) => setName(e.target.value)}
        onChangeWatering={(e) => setWaterFrequency(Number(e.target.value))}
        onSubmit={() => {
          if (name && waterFrequency) {
            addPlant({
              variables: {
                name,
                waterFrequency,
              },
            });
            onClose();
          }
        }}
      />
      <IconButton
        colorScheme="twitter"
        aria-label="Call Segun"
        size="lg"
        onClick={() => {
          setWaterFrequency(null);
          setName(null);
          onOpen();
        }}
        icon={<AddIcon />}
      />
    </>
  );
};
