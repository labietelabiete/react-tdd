describe("matchers", () => {
  test("toBe", () => {
    // For comparing type and value, like === on conditional
    expect(true).toBe(true);
  });
  test("toEqual", () => {
    // For comparing arrays or objects or other structures
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });

    const arr = ['one', 'two'];
    expect(arr).toEqual(['one', 'two']);
  });
  test('not', () => {
    expect(true).not.toBe(false);
  });
  test('string', () => {
    // Methods for strings, for example to match if it contains the character
    expect('team').not.toMatch(/I/);
  });
  test('thrown', () => {
    // expect(compileAndroidCode).toThrow();
    // expect(compileAndroidCode).toThrow(Error);

    // // You can also use the exact error message or a regexp
    // expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    // expect(compileAndroidCode).toThrow(/JDK/);
  });

});
