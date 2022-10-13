import { decodeObject } from '../../helpers/decodeObject';
import { encodeObject } from '../../helpers/encodeObject';

describe('GIVEN the decodeObject method', () => {
  let encodedObject: string;

  beforeEach(() => {
    encodedObject = encodeObject({ id: 'mockId' });
  });

  test('THEN it should return the object', () => {
    const response = decodeObject(encodedObject);
    const expected = { id: 'mockId' };
    expect(response).toEqual(expected);
  });
});
