import { DecodedCursor, OrderByDirection } from '@jest-games-organization/backend-package-graphql-types';
import { encodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { decodeCursor } from '../../helpers/decodeCursor';

describe('GIVEN the decodeCursor method', () => {
  let cursor: string;
  let decodedCursor: DecodedCursor<{ id: string }>;

  beforeEach(() => {
    decodedCursor = {
      data: { id: 'mockId' },
      args: { orderBy: [{ id: OrderByDirection.Descending }] },
    };
    cursor = encodeObject(decodedCursor);
  });

  test('THEN it should return the decoded cursor', () => {
    const response = decodeCursor(cursor);
    const expected = decodedCursor;
    expect(response).toEqual(expected);
  });
});
