import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router, useNavigate } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { useGetSinglePokemon } from "../../hooks/useGetSinglePokemon";
import { PokemonDetailsPage } from "../PokemonDetailsPage";
import { testPokemonData } from "../../../../test/utilities";

const mockedGetSinglePokemon = useGetSinglePokemon as jest.Mock<any>;

const MockView = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/pokemon/1");
  };

  return (
    <>
      <button onClick={handleClick}>Change Page</button>
      <PokemonDetailsPage />
    </>
  );
};

function renderComponent(initialEntries = ["/pokemon"]) {
  return render(
    <Router initialEntries={initialEntries}>
      <MockView />
    </Router>
  );
}

jest.mock("../../hooks/useGetSinglePokemon");

describe("Pokemon Card", () => {
  beforeEach(() => {
    mockedGetSinglePokemon.mockImplementation(() => ({
      data: testPokemonData,
    }));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should render without crashing", () => {
    renderComponent();
  });

  it("Should dispay loading indicator when getting data", () => {
    renderComponent();
    mockedGetSinglePokemon.mockImplementation(() => ({ isLoading: true }));
    act(() => {
      screen.getByText("Change Page").click();
    });
    expect(screen.getByTestId("loading-spinner")).toBeVisible();
  });

  it("Should dispay no match message", () => {
    renderComponent();
    mockedGetSinglePokemon.mockImplementation(() => ({
      isLoading: false,
      data: undefined,
    }));
    act(() => {
      screen.getByText("Change Page").click();
    });
    expect(
      screen.getByText("Sorry a Pokemon with that ID couldn't be retrieved")
    ).toBeVisible();
  });

  it("Should display a pokemon", () => {
    renderComponent();
    mockedGetSinglePokemon.mockImplementation(() => ({
      isLoading: false,
      data: testPokemonData,
    }));
    act(() => {
      screen.getByText("Change Page").click();
    });

    expect(screen.getByText("Test Stat")).toBeVisible();
    expect(screen.getByText("Test Type")).toBeVisible();
    expect(screen.getByText("Flying")).toBeVisible();
    expect(screen.getByText("11")).toBeVisible();
    expect(screen.getByText("NATHAN TEST - #001")).toBeVisible();
  });
});
