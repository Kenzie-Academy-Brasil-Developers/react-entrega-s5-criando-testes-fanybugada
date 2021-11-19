import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import api from "../../services";
import Search from "../../components/Search";

import { LocateCepProvider } from "../../providers/CepProvider";

const apiMock = new MockAdapter(api);

describe("Search Page", () => {
  it("should be able to search", async () => {
    const setCepNumber = jest.fn();
    apiMock.onPost("91720040").replyOnce(200, {});
    const cepBox = screen.getByPlaceholderText("Insira o CEP aqui");
    const searchButton = screen.getByText("Buscar CEP");

    render(
      <LocateCepProvider value={{ setCepNumber }}>
        <Search />
      </LocateCepProvider>
    );

    fireEvent.change(cepBox, { target: { value: 91720040 } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(cepBox).toHaveValue(91720040);
    });
  });
});
