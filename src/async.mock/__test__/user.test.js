import { validate, register } from "../user";
import { verifyPassword } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", () => {
    // TODO 19: add test here
    const result = validate("userName", "password");

    expect(result).toBeTruthy();
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyPassword.mockReturnValue(false);

    const result = register("userName", "password");

    await expect(result).rejects.toThrow(expect.any(Error));
  });
});
