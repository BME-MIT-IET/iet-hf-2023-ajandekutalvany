import React, { ChangeEvent } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";

export function PlantModal(props: {
  open: boolean;
  submitText: string;
  headerText: string;
  onClose: () => void;
  name?: string;
  onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  waterFrequency?: number;
  onChangeWatering: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}) {
  return (
    <Modal isOpen={props.open} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.headerText}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack gap={2}>
            <Input
              variant="filled"
              placeholder="Name"
              defaultValue={props.name}
              onChange={props.onChangeName}
            />
            <Input
              variant="filled"
              type="number"
              defaultValue={props.waterFrequency}
              placeholder="Watering Frequency in Days"
              onChange={props.onChangeWatering}
            />
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={props.onClose}>
            Cancel
          </Button>
          <Button variant="solid" colorScheme="green" onClick={props.onSubmit}>
            {props.submitText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
