import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react"
import type { Pokemon } from "./types";
import App from "./App";

const dummyPokemon: Pokemon[] = [
  {
    name: { english: "Bulbasaur" },
    id: 0
  },
  {
    name: { english: "Charmander" },
    id: 1
  }
];

describe("App", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn(() => {}));
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it("Loads loading stage", () => {
      vi.mocked(fetch).mockReturnValue( new Promise(() => {}));

      render(<App />);

      expect(screen.getByText("Loading...")).toBeInTheDocument();
  })

  it("renders error text", async () => {
    vi.mocked(fetch).mockRejectedValue(new Error("Msg"));

    render(<App />);
    const expectedErrorMessage = await screen.findByText(/Error:/);
    expect(expectedErrorMessage).toBeInTheDocument();
  })


  it("renders no data state", async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: async () => [],

    } as Response);
    
    render(<App />);

    const expectedNoDataMessage = await screen.findByText(/No Pokemon/);
    
    expect(expectedNoDataMessage).toBeInTheDocument();

  });

  it("renders fetched data state", async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: async () => dummyPokemon,
    } as Response);

    render(<App />);

    expect(await screen.findByRole("heading", { name: "Pokemon" })).toBeInTheDocument();

    const bulbasaur = await screen.findByText(/Bulbasaur/);
    const charmander = await screen.findByText(/Charmander/);

    expect(bulbasaur).toBeInTheDocument();
    expect(charmander).toBeInTheDocument();
  })


});