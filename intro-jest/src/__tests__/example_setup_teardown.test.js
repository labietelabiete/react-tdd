describe("setup and teardown examples", () => {
  beforeAll(() => {
    console.log("before all");
  });
  beforeEach(() => {
    console.log('before each');
  })
  afterAll(() => {
    console.log('after all');
  })
  afterEach(() => {
    console.log('after each');
  })

  test("example 1", () => {
    expect(true).toBe(true);
  });
  test("example 2", () => {
    expect(true).toBe(true);
  });

});
