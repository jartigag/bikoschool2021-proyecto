import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("GuifAffinity", () => {
  it("makes a request from the main application and render image", async () => {
    // Arrange

    // Act
    render(<App />);

    // Assert
    await waitFor(() => {
      const image = screen.getAllByRole("img");
      expect(image[0]).toHaveAttribute(
        "src",
        expect.stringMatching("https://media4.giphy.com/media")
      );
    });
  });
});