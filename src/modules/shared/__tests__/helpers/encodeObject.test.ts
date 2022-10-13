import { decodeObject } from '../../helpers/decodeObject';
import { encodeObject } from '../../helpers/encodeObject';

describe('GIVEN the encodeObject method', () => {
  let decodedObject: { id: string };

  beforeEach(() => {
    decodedObject = decodeObject('eyJpZCI6Im1vY2tJZCJ9');
  });

  test('THEN it should return the object', () => {
    const response = encodeObject(decodedObject);
    const expected = 'eyJpZCI6Im1vY2tJZCJ9';
    expect(response).toEqual(expected);
  });
});
