import { encodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { createCursor } from '../../helpers/createCursor';
import { createEdge } from '../../helpers/createEdge';
import { createEdges } from '../../helpers/createEdges';
import { createNode } from '../../helpers/createNode';

describe('GIVEN the createEdges method', () => {
  let records: { [key: string]: any }[];
  let args: { orderBy: { [key in keyof typeof records[0]]?: 'asc' | 'desc' }[] };

  beforeEach(() => {
    records = [{ id: 'mockId1' }, { id: 'mockId2' }];
    args = { orderBy: [{ id: 'asc' }] };
  });

  describe('AND the "config" prop', () => {
    describe('WHEN the "config" prop is not provided', () => {
      test('THEN it should return the edges', () => {
        const response = createEdges(records, args);
        const expected = [
          { node: { id: 'mockId1' }, cursor: encodeObject({ data: { id: 'mockId1' }, args }) },
          { node: { id: 'mockId2' }, cursor: encodeObject({ data: { id: 'mockId2' }, args }) },
        ];
        expect(response).toEqual(expected);
      });
    });

    describe('WHEN the "config" prop is provided', () => {
      describe('AND the "createCursor" field', () => {
        describe('WHEN the "createCursor" field is not provided', () => {
          test('THEN it should return the edges', () => {
            const config = {};
            const response = createEdges(records, args, config);
            const expected = [
              { node: { id: 'mockId1' }, cursor: encodeObject({ data: { id: 'mockId1' }, args }) },
              { node: { id: 'mockId2' }, cursor: encodeObject({ data: { id: 'mockId2' }, args }) },
            ];
            expect(response).toEqual(expected);
          });
        });

        describe('WHEN the "createCursor" field is provided', () => {
          test('THEN it should return the edges', () => {
            const config = { createCursor };
            const response = createEdges(records, args, config);
            const expected = [
              { node: { id: 'mockId1' }, cursor: encodeObject({ data: { id: 'mockId1' }, args }) },
              { node: { id: 'mockId2' }, cursor: encodeObject({ data: { id: 'mockId2' }, args }) },
            ];
            expect(response).toEqual(expected);
          });
        });
      });

      describe('AND the "createEdge" field', () => {
        describe('WHEN the "createEdge" field is not provided', () => {
          test('THEN it should return the edges', () => {
            const config = {};
            const response = createEdges(records, args, config);
            const expected = [
              { node: { id: 'mockId1' }, cursor: encodeObject({ data: { id: 'mockId1' }, args }) },
              { node: { id: 'mockId2' }, cursor: encodeObject({ data: { id: 'mockId2' }, args }) },
            ];
            expect(response).toEqual(expected);
          });
        });

        describe('WHEN the "createEdge" field is provided', () => {
          test('THEN it should return the edges', () => {
            const config = { createEdge };
            const response = createEdges(records, args, config);
            const expected = [
              { node: { id: 'mockId1' }, cursor: encodeObject({ data: { id: 'mockId1' }, args }) },
              { node: { id: 'mockId2' }, cursor: encodeObject({ data: { id: 'mockId2' }, args }) },
            ];
            expect(response).toEqual(expected);
          });
        });
      });

      describe('AND the "createNode" field', () => {
        describe('WHEN the "createNode" field is not provided', () => {
          test('THEN it should return the edges', () => {
            const config = {};
            const response = createEdges(records, args, config);
            const expected = [
              { node: { id: 'mockId1' }, cursor: encodeObject({ data: { id: 'mockId1' }, args }) },
              { node: { id: 'mockId2' }, cursor: encodeObject({ data: { id: 'mockId2' }, args }) },
            ];
            expect(response).toEqual(expected);
          });
        });

        describe('WHEN the "createNode" field is provided', () => {
          test('THEN it should return the edges', () => {
            const config = { createNode };
            const response = createEdges(records, args, config);
            const expected = [
              { node: { id: 'mockId1' }, cursor: encodeObject({ data: { id: 'mockId1' }, args }) },
              { node: { id: 'mockId2' }, cursor: encodeObject({ data: { id: 'mockId2' }, args }) },
            ];
            expect(response).toEqual(expected);
          });
        });
      });

      describe('AND the "encodeObject" field', () => {
        describe('WHEN the "encodeObject" field is not provided', () => {
          test('THEN it should return the edges', () => {
            const config = {};
            const response = createEdges(records, args, config);
            const expected = [
              { node: { id: 'mockId1' }, cursor: encodeObject({ data: { id: 'mockId1' }, args }) },
              { node: { id: 'mockId2' }, cursor: encodeObject({ data: { id: 'mockId2' }, args }) },
            ];
            expect(response).toEqual(expected);
          });
        });

        describe('WHEN the "encodeObject" field is provided', () => {
          test('THEN it should return the edges', () => {
            const config = { encodeObject };
            const response = createEdges(records, args, config);
            const expected = [
              { node: { id: 'mockId1' }, cursor: encodeObject({ data: { id: 'mockId1' }, args }) },
              { node: { id: 'mockId2' }, cursor: encodeObject({ data: { id: 'mockId2' }, args }) },
            ];
            expect(response).toEqual(expected);
          });
        });
      });
    });
  });
});
