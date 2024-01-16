// Node modules
import { test, expect } from "vitest";

// Project files
import dayGenerator from "./dayGenerator";

test("Returns the name of a specified date", () => {
  // Arrange
  const date = new Date("01-16-2024");
  const result = "Tuesday";

  // Act
  const test = dayGenerator(date);

  // Assert
  expect(test).toBe(result);
});
