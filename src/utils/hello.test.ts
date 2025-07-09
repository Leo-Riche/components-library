import { describe, it, expect } from "vitest";
import { helloWorld } from "./hello";

describe("helloWorld", () => {
  it('devrait retourner "hello world John" quand on passe "John"', () => {
    // Arrange
    const name = "John";
    const expected = "hello world John";

    // Act
    const result = helloWorld(name);

    // Assert
    expect(result).toBe(expected);
  });

  it('devrait retourner "hello world Marie" quand on passe "Marie"', () => {
    // Arrange
    const name = "Marie";
    const expected = "hello world Marie";

    // Act
    const result = helloWorld(name);

    // Assert
    expect(result).toBe(expected);
  });

  it("devrait gérer un nom vide", () => {
    // Arrange
    const name = "";
    const expected = "hello world ";

    // Act
    const result = helloWorld(name);

    // Assert
    expect(result).toBe(expected);
  });

  it("devrait gérer les noms avec des espaces", () => {
    // Arrange
    const name = "Jean Pierre";
    const expected = "hello world Jean Pierre";

    // Act
    const result = helloWorld(name);

    // Assert
    expect(result).toBe(expected);
  });
});
