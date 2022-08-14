import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router, useNavigate } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { testPokemonData, testPokemonListData } from "../../../../test/utilities";
import { PokemonList } from "../PokemonListPage";
import { useGetPokemonList } from "../../hooks/useGetPokemonList";

const mockedUseGetPokemonList = useGetPokemonList as jest.Mock<any>;

const MockView = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/pokemon");
  };

  return (
    <>
      <button onClick={handleClick}>Change Page</button>
      <PokemonList />
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

jest.mock("../../hooks/useGetPokemonList");

describe("Pokemon Card", () => {
  beforeEach(() => {
    mockedUseGetPokemonList.mockImplementation(() => ({ data: testPokemonData }));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should render without crashing", () => {
    renderComponent();
  });

  it("Should dispay loading indicator when getting data", () => {
    renderComponent();
    mockedUseGetPokemonList.mockImplementation(() => ({ isLoading: true }));
    act(() => {
      screen.getByText("Change Page").click();
    });
    expect(screen.getByTestId('loading-spinner')).toBeVisible();
  });

  it("Should dispay error message", () => {
    renderComponent();
    mockedUseGetPokemonList.mockImplementation(() => ({ isLoading: false, isError: true }));
    act(() => {
      screen.getByText("Change Page").click();
    });
    expect(screen.getByText("There has been an issue getting the Pokemon")).toBeVisible();
  });

  it("Should dispay no match message", () => {
    renderComponent();
    mockedUseGetPokemonList.mockImplementation(() => ({ isLoading: false, data: undefined }));
    act(() => {
      screen.getByText("Change Page").click();
    });
    expect(screen.getByText("No Pokemon match your search")).toBeVisible();
  });

  it("Should display a list of pokemon", () => {
    renderComponent();
    mockedUseGetPokemonList.mockImplementation(() => ({ isLoading: false, data: testPokemonListData }));
    act(() => {
      screen.getByText("Change Page").click();
    });

    expect(screen.getByText("Pokemon One")).toBeVisible();
    expect(screen.getByText("Pokemon Two")).toBeVisible();
    expect(screen.getByText("Pokemon Three")).toBeVisible();

  });
});
