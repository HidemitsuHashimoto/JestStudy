import { expect } from "chai";
import map from "./map";

test("map() should return []", () => {
  expect(map()).to.be.deep.equal([]);
});

test("map([1, 2]) should return [1, 2]", () => {
  expect(map([1, 2])).to.be.deep.equal([1, 2]);
});

test("map(1) should throw a TypeError", () => {
  let error = { name: true };
  try {
    map(1);
  } catch (e) {
    error = e;
  }
  expect(error.name).to.be.equal("TypeError");
});

test("map(1) should return a TypeError with message 'Arr is not an Array'", () => {
  let error = { message: true };

  try {
    map(1);
  } catch (e) {
    error = e;
  }
  expect(error.message).to.be.equal("Arr is not an Array");
});
