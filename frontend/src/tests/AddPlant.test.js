import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { AddPlant } from "../components/AddPlant";

const client = new ApolloClient({
  // Configure your ApolloClient instance here
  cache: new InMemoryCache(),
});

describe("AddPlant component", () => {
  test("renders AddPlant component correctly", () => {
    render(
      <ApolloProvider client={client}>
        <AddPlant />
      </ApolloProvider>
    );

    // Check if the AddIcon is rendered
    const addIcon = screen.getByLabelText("Call Segun");
    expect(addIcon).toBeInTheDocument();

    // Check if the PlantModal is initially not visible
    const plantModal = screen.queryByText("Add new plant");
    expect(plantModal).not.toBeInTheDocument();

    // Click the IconButton to open the PlantModal
    fireEvent.click(addIcon);

    // Check if the PlantModal is now visible
    const openedPlantModal = screen.getByText("Add new plant");
    expect(openedPlantModal).toBeInTheDocument();
  });

  test("handles form submission correctly", () => {
    // Mock the useAddPlantMutation hook implementation
    const mockAddPlantMutation = jest.fn();
    jest.mock("../generated/graphql", () => ({
      useAddPlantMutation: () => [mockAddPlantMutation],
    }));

    render(
      <ApolloProvider client={client}>
        <AddPlant />
      </ApolloProvider>
    );

    // Click the IconButton to open the PlantModal
    const addIcon = screen.getByLabelText("Call Segun");
    fireEvent.click(addIcon);

    //  Enter values in the form fields
    const nameInput = screen.getByLabelText("Name");
    fireEvent.change(nameInput, { target: { value: "Plant A" } });

    const waterFrequencyInput = screen.getByLabelText("Watering Frequency");
    fireEvent.change(waterFrequencyInput, { target: { value: "2" } });

    // Submit the form
    const submitButton = screen.getByText("Add");
    fireEvent.click(submitButton);

    // Verify that the addPlant mutation was called with the correct variables
    expect(mockAddPlantMutation).toHaveBeenCalledWith({
      variables: {
        name: "Plant A",
        waterFrequency: 2,
      },
    });

    /** Verify that the PlantModal is closed
    const plantModal = screen.queryByText("Add new plant");
    expect(plantModal).not.toBeInTheDocument();*/
  });
});
