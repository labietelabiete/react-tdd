//Mocking storage
import { storage } from '../lib/storage';
import {saveUsername, getUsername} from '../user'

jest.mock('../lib/storage');


describe("advance mocks", () => {
  test('first example', () => { 
    const userName = 'john doe'
    saveUsername(userName);

    expect(storage.save).toHaveBeenCalledTimes(1);
    expect(storage.save).toHaveBeenCalledWith({key: 'username', value: 'john doe'});
  })
  test('second example', () => {
    const userName = 'john doe'
    storage.get.mockReturnValueOnce(userName);
    const result = getUsername();

    expect(result).toBe('john doe');
    expect(storage.get).toHaveBeenCalledTimes(1);
    expect(storage.get).toHaveBeenCalledWith({key: 'username'});
  })
})