import { ConnectionArgs, OrderByDirection } from '@jest-games-organization/backend-package-graphql-types';
import { encodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { createCursor } from '../../helpers/createCursor';

describe('GIVEN the createCursor method', () => {
  let record: { [key: string]: any };

  beforeEach(() => {
    record = { id: 'mockId' };
  });

  describe('AND the "args" prop', () => {
    describe('AND the "orderBy" field', () => {
      describe('WHEN the "orderBy" field is not provided', () => {
        test('THEN it should return the cursor', () => {
          const args: ConnectionArgs<typeof record> = {};
          const response = createCursor(record, args);
          const expected = encodeObject({ data: {}, args });
          expect(response).toEqual(expected);
        });
      });

      describe('WHEN the "orderBy" field is provided', () => {
        test('THEN it should return the cursor', () => {
          const args: ConnectionArgs<typeof record> = { orderBy: [{ id: OrderByDirection.Ascending }] };
          const response = createCursor(record, args);
          const expected = encodeObject({ data: { id: 'mockId' }, args });
          expect(response).toEqual(expected);
        });
      });
    });
  });

  describe('AND the "config" prop', () => {
    describe('WHEN the "config" prop is not provided', () => {
      test('THEN it should return the cursor', () => {
        const args: ConnectionArgs<typeof record> = {};
        const response = createCursor(record, args);
        const expected = encodeObject({ data: {}, args });
        expect(response).toEqual(expected);
      });
    });

    describe('WHEN the "config" prop is provided', () => {
      describe('AND the "encodeObject" field', () => {
        describe('WHEN the "encodeObject" field is not provided', () => {
          test('THEN it should return the cursor', () => {
            const args: ConnectionArgs<typeof record> = {};
            const config = {};
            const response = createCursor(record, args, config);
            const expected = encodeObject({ data: {}, args });
            expect(response).toEqual(expected);
          });
        });

        describe('WHEN the "encodeObject" field is provided', () => {
          test('THEN it should return the cursor', () => {
            const args: ConnectionArgs<typeof record> = {};
            const config = { encodeObject };
            const response = createCursor(record, args, config);
            const expected = encodeObject({ data: {}, args });
            expect(response).toEqual(expected);
          });
        });
      });
    });
  });
});
