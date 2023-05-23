import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { AddPlant } from "../components/AddPlant";
import userEvent from "@testing-library/user-event";

const client = new ApolloClient({
  // Configure your ApolloClient instance here
  cache: new InMemoryCache(),
});

// it("renders AddPlant component correctly", () => {
//   render(
//     <ApolloProvider client={client}>
//       <AddPlant />
//     </ApolloProvider>
//   );

//   // Check if the AddIcon is rendered
//   const addIcon = screen.getByLabelText("Call Segun");
//   expect(addIcon).toBeInTheDocument();

//   // Check if the PlantModal is initially not visible
//   const plantModal = screen.queryByText("Add new plant");
//   expect(plantModal).not.toBeInTheDocument();
// });

it("is able to add a plant correctly", async () => {
  await render(
    <ApolloProvider client={client}>
      <AddPlant />
    </ApolloProvider>
  );

  // Click the IconButton to open the PlantModal
  await fireEvent.click(screen.getByLabelText("Call Segun"));

  // Check if the PlantModal is now visible
  expect(screen.getByText("Add new plant")).toBeVisible();

  //gets the Name and Watering Frequency in Days textboxes
  const nameTb = screen.getByPlaceholderText(/Name/);
  const wateringFrequencyTb = screen.getByPlaceholderText(/Watering/);
  expect(nameTb).toBeVisible();
  expect(wateringFrequencyTb).toBeVisible();

  //puts "testplant" and 10 into the textboxes
  await userEvent.type(nameTb, "Ubul, a növény");
  await userEvent.type(wateringFrequencyTb, 10);

  //fireEvent.click(screen.getByText(/Add/));
});

// it("'last watered' should update when plant is watered", () => {});

// it("water frequency should be equal to the value given at edit", () => {});

// it("deleted plant should not be visible", () => {});
