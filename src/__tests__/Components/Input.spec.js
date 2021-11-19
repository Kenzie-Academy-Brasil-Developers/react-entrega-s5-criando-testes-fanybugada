import React from "react";
import { render, screen } from "@testing-library/react";
import { Input } from "semantic-ui-react";

describe("Input Component", () => {
  test("should be rendering a input", () => {
    render(<Input placeholder="Insira o CEP aqui" />);

    expect(screen.getAllByPlaceholderText("Insira o CEP aqui")).toBeTruthy();
  });

  test("Should be able to have type number", () => {
    render(<Input placeholder="Insira o CEP aqui" type="number" />);

    expect(screen.getByPlaceholderText("Insira o CEP aqui")).toBeTruthy();
  });
});
