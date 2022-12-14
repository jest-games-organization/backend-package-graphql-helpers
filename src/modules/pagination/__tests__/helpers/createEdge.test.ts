import { encodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { createCursor } from '../../helpers/createCursor';
import { createEdge } from '../../helpers/createEdge';
import { createNode } from '../../helpers/createNode';

describe('GIVEN the createEdge method', () => {
  let record: { [key: string]: any };
  let args: { orderBy: { [key in keyof typeof record]?: 'asc' | 'desc' }[] };

  beforeEach(() => {
    record = { id: 'mockId' };
    args = { orderBy: [{ id: 'asc' }] };
  });

  describe('AND the "config" prop', () => {
    describe('WHEN the "config" prop is not provided', () => {
      test('THEN it should return the edge', () => {
        const response = createEdge(record, args);
        const expected = { node: { id: 'mockId' }, cursor: encodeObject({ data: { id: 'mockId' }, args }) };
        expect(response).toEqual(expected);
      });
    });

    describe('WHEN the "config" prop is provided', () => {
      describe('AND the "createCursor" field', () => {
        describe('WHEN the "createCursor" field is not provided', () => {
          test('THEN it should return the edge', () => {
            const config = {};
            const response = createEdge(record, args, config);
            const expected = { node: { id: 'mockId' }, cursor: encodeObject({ data: { id: 'mockId' }, args }) };
            expect(response).toEqual(expected);
          });
        });

        describe('WHEN the "createCursor" field is provided', () => {
          test('THEN it should return the edge', () => {
            const config = { createCursor };
            const response = createEdge(record, args, config);
            const expected = { node: { id: 'mockId' }, cursor: encodeObject({ data: { id: 'mockId' }, args }) };
            expect(response).toEqual(expected);
          });
        });
      });

      describe('AND the "createNode" field', () => {
        describe('WHEN the "createNode" field is not provided', () => {
          test('THEN it should return the edge', () => {
            const config = {};
            const response = createEdge(record, args, config);
            const expected = { node: { id: 'mockId' }, cursor: encodeObject({ data: { id: 'mockId' }, args }) };
            expect(response).toEqual(expected);
          });
        });

        describe('WHEN the "createNode" field is provided', () => {
          test('THEN it should return the edge', () => {
            const config = { createNode };
            const response = createEdge(record, args, config);
            const expected = { node: { id: 'mockId' }, cursor: encodeObject({ data: { id: 'mockId' }, args }) };
            expect(response).toEqual(expected);
          });
        });
      });

      describe('AND the "encodeObject" field', () => {
        describe('WHEN the "encodeObject" field is not provided', () => {
          test('THEN it should return the edge', () => {
            const config = {};
            const response = createEdge(record, args, config);
            const expected = { node: { id: 'mockId' }, cursor: encodeObject({ data: { id: 'mockId' }, args }) };
            expect(response).toEqual(expected);
          });
        });

        describe('WHEN the "encodeObject" field is provided', () => {
          test('THEN it should return the edge', () => {
            const config = { encodeObject };
            const response = createEdge(record, args, config);
            const expected = { node: { id: 'mockId' }, cursor: encodeObject({ data: { id: 'mockId' }, args }) };
            expect(response).toEqual(expected);
          });
        });
      });
    });
  });
});
