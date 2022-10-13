import { encodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { getGlobalObjectIdentifierData } from '../../helpers/getGlobalObjectIdentifierData';

describe('GIVEN the getGlobalObjectIdentifierData method', () => {
  let globalObjectIdentifier: string;

  beforeEach(() => {
    globalObjectIdentifier = encodeObject({ data: {} });
  });

  test('THEN it should return the global object identifier data', () => {
    const response = getGlobalObjectIdentifierData(globalObjectIdentifier);
    const expected = {};
    expect(response).toEqual(expected);
  });
});
