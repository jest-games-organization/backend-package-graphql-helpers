import { ConnectionArgs } from '@jest-games-organization/backend-package-graphql-types';
import { encodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { createCursor } from '../../helpers/createCursor';
import { createPageInfo } from '../../helpers/createPageInfo';

describe('GIVEN the createPageInfo method', () => {
  let records: { [key: string]: any }[];
  let hasNextPage: boolean;
  let hasPreviousPage: boolean;
  let args: { orderBy: { [key in keyof typeof records[0]]?: 'asc' | 'desc' }[] };

  beforeEach(() => {
    hasNextPage = false;
    hasPreviousPage = false;
    args = { orderBy: [{ id: 'asc' }] };
  });

  describe('AND the "records" prop', () => {
    describe('WHEN the "records" prop is an empty array', () => {
      beforeEach(() => {
        records = [];
      });

      test('THEN it should return the page info', () => {
        const response = createPageInfo(records, hasNextPage, hasPreviousPage, args);
        const expected = {
          hasNextPage,
          hasPreviousPage,
          startCursor: '',
          endCursor: '',
        };
        expect(response).toEqual(expected);
      });
    });

    describe('when the "records" prop is an array with multiple records', () => {
      beforeEach(() => {
        records = [{ id: 'mockId1' }, { id: 'mockId2' }];
      });

      test('THEN it should return the page info', () => {
        const response = createPageInfo(records, hasNextPage, hasPreviousPage, args);
        const expected = {
          hasNextPage,
          hasPreviousPage,
          startCursor: encodeObject({ data: { id: 'mockId1' }, args }),
          endCursor: encodeObject({ data: { id: 'mockId2' }, args }),
        };
        expect(response).toEqual(expected);
      });
    });
  });

  describe('AND the "config" prop', () => {
    beforeEach(() => {
      records = [{ id: 'mockId1' }, { id: 'mockId2' }];
    });

    describe('WHEN the "config" prop is not provided', () => {
      test('THEN it should return the page info', () => {
        const response = createPageInfo(records, hasNextPage, hasPreviousPage, args);
        const expected = {
          hasNextPage,
          hasPreviousPage,
          startCursor: encodeObject({ data: { id: 'mockId1' }, args }),
          endCursor: encodeObject({ data: { id: 'mockId2' }, args }),
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
              startCursor: encodeObject({ data: { id: 'mockId1' }, args }),
              endCursor: encodeObject({ data: { id: 'mockId2' }, args }),
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
              startCursor: encodeObject({ data: { id: 'mockId1' }, args }),
              endCursor: encodeObject({ data: { id: 'mockId2' }, args }),
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
              startCursor: encodeObject({ data: { id: 'mockId1' }, args }),
              endCursor: encodeObject({ data: { id: 'mockId2' }, args }),
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
              startCursor: encodeObject({ data: { id: 'mockId1' }, args }),
              endCursor: encodeObject({ data: { id: 'mockId2' }, args }),
            };
            expect(response).toEqual(expected);
          });
        });
      });
    });
  });
});
