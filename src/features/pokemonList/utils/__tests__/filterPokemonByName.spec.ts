import { testPokemonListData } from "../../../../test/utilities";
import { filterPokemonByName } from "../filterPokemonByName";

describe("filterByName", () => {
  it("should return correct pokemon", () => {
    const expectedOutput = testPokemonListData;
    const res = filterPokemonByName(testPokemonListData, "Pok");

    expect(res).toEqual(expectedOutput);
  });
  it("should return no pokemon", () => {
    const expectedOutput: [] = [];
    const res = filterPokemonByName(testPokemonListData, "ZZZZ");

    expect(res).toEqual(expectedOutput);
  });
});
