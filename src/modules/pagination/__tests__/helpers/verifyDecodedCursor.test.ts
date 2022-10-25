import { DecodedCursor, OrderByDirection } from '@jest-games-organization/backend-package-graphql-types';
import { verifyDecodedCursor } from '../../helpers/verifyDecodedCursor';

describe('GIVEN the verifyDecodedCursor method', () => {
  describe('WHEN the cursor is not valid', () => {
    describe('WHEN there are no order by keys', () => {
      let decodedCursor: DecodedCursor<{}>;

      beforeEach(() => {
        decodedCursor = { args: { orderBy: [] }, data: {} };
      });

      test('THEN it should throw an error', () => {
        expect(() => verifyDecodedCursor(decodedCursor)).toThrowError(
          'The cursor is invalid: order by keys not found.',
        );
      });
    });

    describe('WHEN there are no data keys', () => {
      let decodedCursor: DecodedCursor<{}>;

      beforeEach(() => {
        decodedCursor = { args: { orderBy: [{ id: 'mockId' }] }, data: {} };
      });

      test('THEN it should throw an error', () => {
        expect(() => verifyDecodedCursor(decodedCursor)).toThrowError('The cursor is invalid: data keys not found.');
      });
    });

    describe('WHEN the order by keys length and data keys length are not the same', () => {
      let decodedCursor: DecodedCursor<{ id: string; a?: string }>;

      beforeEach(() => {
        decodedCursor = {
          data: { id: 'mockId' },
          args: { orderBy: [{ id: OrderByDirection.Ascending }, { a: OrderByDirection.Descending }] },
        };
      });

      test('THEN it should throw an error', () => {
        expect(() => verifyDecodedCursor(decodedCursor)).toThrowError(
          'The cursor is invalid: the number of order by and data keys do not match.',
        );
      });
    });

    describe('WHEN the order by keys and data keys are not the same', () => {
      let decodedCursor: DecodedCursor<{ id: string; a?: string; b?: string }>;

      beforeEach(() => {
        decodedCursor = {
          data: { id: 'mockId', a: 'mockA' },
          args: { orderBy: [{ id: OrderByDirection.Ascending }, { b: OrderByDirection.Descending }] },
        };
      });

      test('THEN it should throw an error', () => {
        expect(() => verifyDecodedCursor(decodedCursor)).toThrowError(
          'The cursor is invalid: the order by and data keys do not match.',
        );
      });
    });
  });

  describe('WHEN the cursor is valid', () => {
    let decodedCursor: DecodedCursor<{ id: string; a?: string }>;

    beforeEach(() => {
      decodedCursor = {
        data: { id: 'mockId', a: 'mockA' },
        args: { orderBy: [{ id: OrderByDirection.Ascending }, { a: OrderByDirection.Descending }] },
      };
    });

    test('THEN it should return a cursor', () => {
      const response = verifyDecodedCursor(decodedCursor);
      expect(response).toBe(true);
    });
  });
});
