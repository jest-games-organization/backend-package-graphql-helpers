import { encodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { decodeCursor } from '../../helpers/decodeCursor';

describe('GIVEN the decodeCursor method', () => {
  let cursor: string;

  beforeEach(() => {
    cursor = encodeObject({ data: {}, args: {} });
  });

  test('THEN it should return the decoded cursor', () => {
    const response = decodeCursor(cursor);
    const expected = { data: {}, args: {} };
    expect(response).toEqual(expected);
  });
});
