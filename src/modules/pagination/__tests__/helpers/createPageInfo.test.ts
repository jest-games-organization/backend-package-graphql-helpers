import { ConnectionArgs } from '@jest-games-organization/backend-package-graphql-types';
import { encodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { createCursor } from '../../helpers/createCursor';
import { createPageInfo } from '../../helpers/createPageInfo';

describe('GIVEN the createPageInfo method', () => {
  let records: { [key: string]: any }[];
  let hasNextPage: boolean;
  let hasPreviousPage: boolean;
  let args: ConnectionArgs<typeof records[0]>;

  beforeEach(() => {
    records = [{ id: 'mockId1' }, { id: 'mockId2' }];
    hasNextPage = false;
    hasPreviousPage = false;
    args = {};
  });

  describe('AND the "config" prop', () => {
    describe('WHEN the "config" prop is not provided', () => {
      test('THEN it should return the page info', () => {
        const response = createPageInfo(records, hasNextPage, hasPreviousPage, args);
        const expected = {
          hasNextPage,
          hasPreviousPage,
          startCursor: encodeObject({ data: {}, args }),
          endCursor: encodeObject({ data: {}, args }),
        };
        expect(response).toEqual(expected);
      });
    });

    describe('WHEN the "config" prop is provided', () => {
      describe('AND the "createCursor" field', () => {
        describe('WHEN the "createCursor" field is not provided', () => {
          test('THEN it should return the page info', () => {
            const config = {};
            const response = createPageInfo(records, hasNextPage, hasPreviousPage, args, config);
            const expected = {
              hasNextPage,
              hasPreviousPage,
              startCursor: encodeObject({ data: {}, args }),
              endCursor: encodeObject({ data: {}, args }),
            };
            expect(response).toEqual(expected);
          });
        });

        describe('WHEN the "createCursor" field is provided', () => {
          test('THEN it should return the page info', () => {
            const config = { createCursor };
            const response = createPageInfo(records, hasNextPage, hasPreviousPage, args, config);
            const expected = {
              hasNextPage,
              hasPreviousPage,
              startCursor: encodeObject({ data: {}, args }),
              endCursor: encodeObject({ data: {}, args }),
            };
            expect(response).toEqual(expected);
          });
        });
      });

      describe('AND the "encodeObject" field', () => {
        describe('WHEN the "encodeObject" field is not provided', () => {
          test('THEN it should return the page info', () => {
            const config = {};
            const response = createPageInfo(records, hasNextPage, hasPreviousPage, args, config);
            const expected = {
              hasNextPage,
              hasPreviousPage,
              startCursor: encodeObject({ data: {}, args }),
              endCursor: encodeObject({ data: {}, args }),
            };
            expect(response).toEqual(expected);
          });
        });

        describe('WHEN the "encodeObject" field is provided', () => {
          test('THEN it should return the page info', () => {
            const config = { encodeObject };
            const response = createPageInfo(records, hasNextPage, hasPreviousPage, args, config);
            const expected = {
              hasNextPage,
              hasPreviousPage,
              startCursor: encodeObject({ data: {}, args }),
              endCursor: encodeObject({ data: {}, args }),
            };
            expect(response).toEqual(expected);
          });
        });
      });
    });
  });
});
