import { encodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { getGlobalObjectIdentifierTypename } from '../../helpers/getGlobalObjectIdentifierTypename';

describe('GIVEN the getGlobalObjectIdentifierTypename method', () => {
  let globalObjectIdentifier: string;

  beforeEach(() => {
    globalObjectIdentifier = encodeObject({ typename: 'MockTypename' });
  });

  test('THEN it should return the global object identifier typename', () => {
    const response = getGlobalObjectIdentifierTypename(globalObjectIdentifier);
    const expected = 'MockTypename';
    expect(response).toEqual(expected);
  });
});
