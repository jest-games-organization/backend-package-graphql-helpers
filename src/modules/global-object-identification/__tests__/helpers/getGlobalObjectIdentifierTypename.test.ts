import { encodeObject } from '../../../shared/helpers/encodeObject';
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
