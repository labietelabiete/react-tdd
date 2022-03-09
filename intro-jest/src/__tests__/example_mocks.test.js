describe("first example", () => {
  test("example 1", () => {
    const myMock = jest.fn();
    myMock();

    expect(myMock).toHaveBeenCalled();
  });
  test("example 2", () => {
    const myMock = jest.fn();
    myMock();
    myMock();
    myMock();

    expect(myMock).toHaveBeenCalledTimes(3);
  });
  test("example 3", () => {
    const myMock = jest.fn().mockReturnValueOnce(true)
      .mockReturnValueOnce('hello world')
      .mockReturnValueOnce(5);

    const result1 = myMock();
    const result2 = myMock();
    const result3 = myMock();

    expect(myMock).toHaveBeenCalledTimes(3);
    expect(result1).toBe(true);
    expect(result2).toBe('hello world');
    expect(result3).toBe(5);
  });
});
