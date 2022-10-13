import { encodeObject } from '../../../shared/helpers/encodeObject';
import { createGlobalObjectIdentifier } from '../../helpers/createGlobalObjectIdentifier';

describe('GIVEN the createGlobalObjectIdentifier method', () => {
  let typename: string;
  let identifier: { [key: string]: unknown };

  beforeEach(() => {
    typename = 'mockTypename';
    identifier = { id: 'mockId' };
  });

  describe('AND the "config" prop', () => {
    describe('WHEN the "config" prop is not provided', () => {
      test('THEN it should return the global object identifier', () => {
        const response = createGlobalObjectIdentifier(typename, identifier);
        const expected = encodeObject({ data: identifier, typename });
        expect(response).toEqual(expected);
      });
    });

    describe('WHEN the "config" prop is provided', () => {
      describe('AND the "encodeObject" field', () => {
        describe('WHEN the "encodeObject" field is not provided', () => {
          test('THEN it should return the global object identifier', () => {
            const config = {};
            const response = createGlobalObjectIdentifier(typename, identifier, config);
            const expected = encodeObject({ data: identifier, typename });
            expect(response).toEqual(expected);
          });
        });

        describe('WHEN the "encodeObject" field is provided', () => {
          test('THEN it should return the global object identifier', () => {
            const config = { encodeObject };
            const response = createGlobalObjectIdentifier(typename, identifier, config);
            const expected = encodeObject({ data: identifier, typename });
            expect(response).toEqual(expected);
          });
        });
      });
    });
  });
});
