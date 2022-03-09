// calbacks
const asyncCallback = (cb) => {
  setTimeout(() => {
    cb(true);
  }, 1000);
};

describe('async code using callbacks', () => {
  test('example of async with callback', (done) => {
    asyncCallback((result) => {
      expect(result).toBe(true);
      done();
    }) 
  })
})

// promises
const asyncPromise = () => new Promise((resolve) => resolve(true));

describe('async code using promises', () => {
  test('example of async with promises', () => {
    return asyncPromise().then((result) => expect(result).toBe(true));
  });
});

// async/await
describe('async code using async/await', () => {
  test('example of async with async/await', async () => {
    const result = await asyncPromise();
    expect(result).toBe(true);
  })
})
