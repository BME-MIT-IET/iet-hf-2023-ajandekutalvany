import {
  Plant,
  PlantsDocument,
  useRemovePlantMutation,
} from "../generated/graphql";
import {
  Box,
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  useToken,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import React from "react";
import { ImDroplet } from "react-icons/im";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export const PlantItem = ({ plant }: { plant: Plant }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [removePlant] = useRemovePlantMutation({
    refetchQueries: [PlantsDocument],
  });
  const [blue400] = useToken("colors", ["blue.400"]);

  const navigate = useNavigate();

  const lastWaterdText = plant.lastWatered
    ? moment(plant.lastWatered).fromNow()
    : "Never";

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete {plant.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to delete <Text as="b">{plant.name}</Text> ?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="solid"
              colorScheme="red"
              onClick={() =>
                removePlant({
                  variables: {
                    id: plant.id,
                  },
                })
              }
               data-testid="deletePlantModalButton"
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box
        shadow="base"
        bgColor="gray.50"
        borderRadius="lg"
        overflow="hidden"
        onClick={() => navigate(`/plant/${plant.id}`)}
      >
        <Stack direction="row" alignItems="center" justifyContent="end" m={4}>
          <Text fontSize="md" mr="auto">
            {plant.name}
          </Text>
          <Stack direction="row" alignItems="center" pr={5}>
            <Text fontSize="md">{lastWaterdText}</Text>
            <ImDroplet color={blue400} />
          </Stack>
          <Icon
            as={DeleteIcon}
            color="red.400"
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
          />
        </Stack>
      </Box>
    </>
  );
};
