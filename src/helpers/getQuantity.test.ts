import getQuantity from "./getQuantity";
import { expect, test } from "vitest";
import data from "./data.json";

test("adds quantity correctly");
{
  expect(getQuantity(data)).toBe(4);
}
