const forEach = require('./callback');



// The mock function is called twice
test('call function with array and return callback', () => {
    const mockCallback = jest.fn(x => 42 + x);
    forEach([0, 1], mockCallback);
    expect(mockCallback.mock.calls.length).toBe(2);
});