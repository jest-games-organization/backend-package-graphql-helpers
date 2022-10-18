import { DecodedCursor } from '@jest-games-organization/backend-package-graphql-types';
import { encodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { decodeCursor } from '../../helpers/decodeCursor';

describe('GIVEN the decodeCursor method', () => {
  let cursor: string;

  describe('WHEN the cursor is not valid', () => {
    describe('WHEN there are no order by keys', () => {
      let decodedCursor: DecodedCursor<{}>;

      beforeEach(() => {
        decodedCursor = { args: { orderBy: [] }, data: {} };
        cursor = encodeObject(decodedCursor);
      });

      test('THEN it should throw an error', () => {
        expect(() => decodeCursor(cursor)).toThrowError('The cursor is invalid: order by keys not found.');
      });
    });

    describe('WHEN there are no data keys', () => {
      let decodedCursor: DecodedCursor<{}>;

      beforeEach(() => {
        decodedCursor = { args: { orderBy: [{ id: 'mockId' }] }, data: {} };
        cursor = encodeObject(decodedCursor);
      });

      test('THEN it should throw an error', () => {
        expect(() => decodeCursor(cursor)).toThrowError('The cursor is invalid: data keys not found.');
      });
    });

    describe('WHEN the order by keys length and data keys length are not the same', () => {
      let decodedCursor: DecodedCursor<{ id: string; a?: string }>;

      beforeEach(() => {
        decodedCursor = {
          data: { id: 'mockId' },
          args: { orderBy: [{ id: 'asc' }, { a: 'desc' }] },
        };
        cursor = encodeObject(decodedCursor);
      });

      test('THEN it should throw an error', () => {
        expect(() => decodeCursor(cursor)).toThrowError(
          'The cursor is invalid: the number of order by and data keys do not match.',
        );
      });
    });

    describe('WHEN the order by keys and data keys are not the same', () => {
      let decodedCursor: DecodedCursor<{ id: string; a?: string; b?: string }>;

      beforeEach(() => {
        decodedCursor = {
          data: { id: 'mockId', a: 'mockA' },
          args: { orderBy: [{ id: 'asc' }, { b: 'desc' }] },
        };
        cursor = encodeObject(decodedCursor);
      });

      test('THEN it should throw an error', () => {
        expect(() => decodeCursor(cursor)).toThrowError(
          'The cursor is invalid: the order by and data keys do not match.',
        );
      });
    });
  });

  describe('WHEN the cursor is valid', () => {
    let decodedCursor: DecodedCursor<{ id: string }>;

    beforeEach(() => {
      decodedCursor = {
        data: { id: 'mockId' },
        args: { orderBy: [{ id: 'asc' }] },
      };
      cursor = encodeObject(decodedCursor);
    });

    test('THEN it should return the decoded cursor', () => {
      const response = decodeCursor(cursor);
      const expected = decodedCursor;
      expect(response).toEqual(expected);
    });
  });
});
