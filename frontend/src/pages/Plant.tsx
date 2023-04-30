import { useNavigate, useParams } from "react-router-dom";
import {
  PlantDocument,
  PlantsDocument,
  useEditPlantMutation,
  usePlantQuery,
  useWaterPlantMutation,
} from "../generated/graphql";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Text,
  useDisclosure,
  useToken,
} from "@chakra-ui/react";
import moment from "moment";
import GaugeChart from "react-gauge-chart";
import { ImDroplet } from "react-icons/im";
import { FaWrench } from "react-icons/fa";
import React, { useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { TextLine } from "../components/TextLine";
import { PlantModal } from "../components/PlantModal";

export const PlantPage = () => {
  const { id } = useParams();
  const [blue400] = useToken("colors", ["blue.400"]);

  const plant = usePlantQuery({
    variables: {
      id: id,
    },
    onCompleted: (data) => {
      setName(data.plant?.name ?? "");
      setWaterFrequency(data.plant?.waterFrequency ?? 0);
    },
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState<string | null>(null);
  const [waterFrequency, setWaterFrequency] = useState<number | null>(null);

  const [editPlant] = useEditPlantMutation({
    refetchQueries: [PlantsDocument],
  });

  const navigate = useNavigate();

  const [water] = useWaterPlantMutation({
    variables: {
      id: id ?? "",
    },
    refetchQueries: [PlantDocument],
  });

  const lastWateredHuman = moment(plant.data?.plant?.lastWatered).fromNow();

  const waterFrequencyHours = plant.data?.plant?.waterFrequency
    ? plant.data?.plant?.waterFrequency * 24
    : 0;
  const hoursFromLastWatering = plant.data?.plant?.lastWatered
    ? moment().diff(moment(plant.data?.plant?.lastWatered), "hours")
    : waterFrequencyHours;

  const progress =
    1 - Math.min(Math.max(hoursFromLastWatering / waterFrequencyHours, 0), 1);

  return (
    <Container height="100vh" overflow="hidden">
      <Stack gap={2} alignItems="start">
        <Box width="100%">
          {plant.error && <Box>Error: {plant.error.message}</Box>}

          {plant.loading && <Box>Loading...</Box>}

          {plant.data?.plant && (
            <Box
              marginTop={3}
              borderWidth="1px"
              borderRadius="lg"
              shadow={"base"}
              overflow="hidden"
            >
              <Stack p="4" gap={1}>
                <Stack
                  direction="row"
                  width="100%"
                  justifyContent="space-between"
                  position={"relative"}
                >
                  <Text fontSize="2xl" textAlign="center" flexGrow={1}>
                    {plant.data.plant.name}
                  </Text>
                  <IconButton
                    position={"absolute"}
                    top={0}
                    right={0}
                    icon={<FaWrench />}
                    aria-label="Edit"
                    variant="outline"
                    onClick={() => {
                      onOpen();
                    }}
                  />
                </Stack>
                <Stack gap={2} alignItems="center">
                  <GaugeChart
                    id="gauge-chart5"
                    nrOfLevels={420}
                    arcsLength={[0.3, 0.3, 0.3]}
                    colors={["#EA4228", "#F5CD19", "#5BE12C"]}
                    percent={progress}
                    textColor={"#5E6977"}
                    arcPadding={0.02}
                  />

                  <Button
                    flexGrow={0}
                    variant="outline"
                    color={blue400}
                    onClick={async () => {
                      await water();
                    }}
                    rightIcon={<ImDroplet />}
                  >
                    Water Now
                  </Button>
                </Stack>
                <TextLine
                  label="Last Watered:"
                  value={
                    plant.data?.plant?.lastWatered ? lastWateredHuman : "Never"
                  }
                />
                <TextLine
                  label="Water Frequency:"
                  value={
                    plant.data?.plant?.waterFrequency
                      ? `${plant.data?.plant?.waterFrequency} days`
                      : "Unknown"
                  }
                />
              </Stack>
            </Box>
          )}
        </Box>
        <Button
          flexGrow={0}
          variant="outline"
          colorScheme={"gray"}
          onClick={() => {
            navigate("/");
          }}
          rightIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </Stack>
      <PlantModal
        headerText="Edit Plant"
        open={isOpen}
        onClose={onClose}
        name={plant.data?.plant?.name ?? ""}
        onChangeName={(e) => setName(e.target.value)}
        waterFrequency={plant.data?.plant?.waterFrequency ?? 0}
        onChangeWatering={(e) => setWaterFrequency(Number(e.target.value))}
        onSubmit={async () => {
          console.log(name, waterFrequency);
          if (name && waterFrequency) {
            await editPlant({
              variables: {
                id: id ?? "",
                plant: {
                  name: name,
                  waterFrequency: waterFrequency,
                },
              },
            });
            onClose();
          }
        }}
        submitText="Edit"
      />
    </Container>
  );
};
