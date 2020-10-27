const forEach = require("./callback");

const mockCallback = jest.fn((x) => 42 + x);
forEach([0, 1], mockCallback);

// The mock function is called twice
test("call function with array and return lenght", () => {
  expect(mockCallback.mock.calls.length).toBe(2);
});

// The first argument of the first call to the function was 0
test("call first argument of the first call to the function was 0", () => {
  expect(mockCallback.mock.calls[0][0]).toBe(0);
});
