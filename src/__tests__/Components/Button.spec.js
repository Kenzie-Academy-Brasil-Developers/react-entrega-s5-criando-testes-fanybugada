import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "semantic-ui-react";

describe("Button Component", () => {
  test("should be rendering a button", () => {
    render(<Button>Buscar CEP</Button>);

    expect(screen.getAllByText("Buscar CEP")).toBeInTheDocument();
  });
});
