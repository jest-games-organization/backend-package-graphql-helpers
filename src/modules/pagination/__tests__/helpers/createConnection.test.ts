import { encodeObject } from '../../../shared/helpers/encodeObject';
import { createConnection } from '../../helpers/createConnection';
import { createCursor } from '../../helpers/createCursor';
import { createEdge } from '../../helpers/createEdge';
import { createEdges } from '../../helpers/createEdges';
import { createNode } from '../../helpers/createNode';
import { createPageInfo } from '../../helpers/createPageInfo';
import { ConnectionArgs } from '../../types/ConnectionArgs';

describe('GIVEN the createConnection method', () => {
  let records: { [key: string]: unknown }[];
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
      test('THEN it should return the connection', () => {
        const response = createConnection(records, hasNextPage, hasPreviousPage, args);
        const expected = {
          edges: [
            {
              node: { id: 'mockId1' },
              cursor: encodeObject({ data: {}, args }),
            },
            {
              node: { id: 'mockId2' },
              cursor: encodeObject({ data: {}, args }),
            },
          ],
          pageInfo: {
            hasNextPage,
            hasPreviousPage,
            startCursor: encodeObject({ data: {}, args }),
            endCursor: encodeObject({ data: {}, args }),
          },
        };
        expect(response).toEqual(expected);
      });
    });

    describe('WHEN the "config" prop is provided', () => {
      describe('AND the "createCursor" field', () => {
        describe('WHEN the "createCursor" field is not provided', () => {
          test('THEN it should return the connection', () => {
            const config = {};
            const response = createConnection(records, hasNextPage, hasPreviousPage, args, config);
            const expected = {
              edges: [
                {
                  node: { id: 'mockId1' },
                  cursor: encodeObject({ data: {}, args }),
                },
                {
                  node: { id: 'mockId2' },
                  cursor: encodeObject({ data: {}, args }),
                },
              ],
              pageInfo: {
                hasNextPage,
                hasPreviousPage,
                startCursor: encodeObject({ data: {}, args }),
                endCursor: encodeObject({ data: {}, args }),
              },
            };
            expect(response).toEqual(expected);
          });
        });

        describe('WHEN the "createCursor" field is provided', () => {
          test('THEN it should return the connection', () => {
            const config = { createCursor };
            const response = createConnection(records, hasNextPage, hasPreviousPage, args, config);
            const expected = {
              edges: [
                {
                  node: { id: 'mockId1' },
                  cursor: encodeObject({ data: {}, args }),
                },
                {
                  node: { id: 'mockId2' },
                  cursor: encodeObject({ data: {}, args }),
                },
              ],
              pageInfo: {
                hasNextPage,
                hasPreviousPage,
                startCursor: encodeObject({ data: {}, args }),
                endCursor: encodeObject({ data: {}, args }),
              },
            };
            expect(response).toEqual(expected);
          });
        });
      });

      describe('AND the "createEdge" field', () => {
        describe('WHEN the "createEdge" field is not provided', () => {
          test('THEN it should return the connection', () => {
            const config = {};
            const response = createConnection(records, hasNextPage, hasPreviousPage, args, config);
            const expected = {
              edges: [
                {
                  node: { id: 'mockId1' },
                  cursor: encodeObject({ data: {}, args }),
                },
                {
                  node: { id: 'mockId2' },
                  cursor: encodeObject({ data: {}, args }),
                },
              ],
              pageInfo: {
                hasNextPage,
                hasPreviousPage,
                startCursor: encodeObject({ data: {}, args }),
                endCursor: encodeObject({ data: {}, args }),
              },
            };
            expect(response).toEqual(expected);
          });
        });

        describe('WHEN the "createEdge" field is provided', () => {
          test('THEN it should return the connection', () => {
            const config = { createEdge };
            const response = createConnection(records, hasNextPage, hasPreviousPage, args, config);
            const expected = {
              edges: [
                {
                  node: { id: 'mockId1' },
                  cursor: encodeObject({ data: {}, args }),
                },
                {
                  node: { id: 'mockId2' },
                  cursor: encodeObject({ data: {}, args }),
                },
              ],
              pageInfo: {
                hasNextPage,
                hasPreviousPage,
                startCursor: encodeObject({ data: {}, args }),
                endCursor: encodeObject({ data: {}, args }),
              },
            };
            expect(response).toEqual(expected);
          });
        });
      });

      describe('AND the "createEdges" field', () => {
        describe('WHEN the "createEdges" field is not provided', () => {
          test('THEN it should return the connection', () => {
            const config = {};
            const response = createConnection(records, hasNextPage, hasPreviousPage, args, config);
            const expected = {
              edges: [
                {
                  node: { id: 'mockId1' },
                  cursor: encodeObject({ data: {}, args }),
                },
                {
                  node: { id: 'mockId2' },
                  cursor: encodeObject({ data: {}, args }),
                },
              ],
              pageInfo: {
                hasNextPage,
                hasPreviousPage,
                startCursor: encodeObject({ data: {}, args }),
                endCursor: encodeObject({ data: {}, args }),
              },
            };
            expect(response).toEqual(expected);
          });
        });

        describe('WHEN the "createEdges" field is provided', () => {
          test('THEN it should return the connection', () => {
            const config = { createEdges };
            const response = createConnection(records, hasNextPage, hasPreviousPage, args, config);
            const expected = {
              edges: [
                {
                  node: { id: 'mockId1' },
                  cursor: encodeObject({ data: {}, args }),
                },
                {
                  node: { id: 'mockId2' },
                  cursor: encodeObject({ data: {}, args }),
                },
              ],
              pageInfo: {
                hasNextPage,
                hasPreviousPage,
                startCursor: encodeObject({ data: {}, args }),
                endCursor: encodeObject({ data: {}, args }),
              },
            };
            expect(response).toEqual(expected);
          });
        });
      });

      describe('AND the "createNode" field', () => {
        describe('WHEN the "createNode" field is not provided', () => {
          test('THEN it should return the connection', () => {
            const config = {};
            const response = createConnection(records, hasNextPage, hasPreviousPage, args, config);
            const expected = {
              edges: [
                {
                  node: { id: 'mockId1' },
                  cursor: encodeObject({ data: {}, args }),
                },
                {
                  node: { id: 'mockId2' },
                  cursor: encodeObject({ data: {}, args }),
                },
              ],
              pageInfo: {
                hasNextPage,
                hasPreviousPage,
                startCursor: encodeObject({ data: {}, args }),
                endCursor: encodeObject({ data: {}, args }),
              },
            };
            expect(response).toEqual(expected);
          });
        });

        describe('WHEN the "createNode" field is provided', () => {
          test('THEN it should return the connection', () => {
            const config = { createNode };
            const response = createConnection(records, hasNextPage, hasPreviousPage, args, config);
            const expected = {
              edges: [
                {
                  node: { id: 'mockId1' },
                  cursor: encodeObject({ data: {}, args }),
                },
                {
                  node: { id: 'mockId2' },
                  cursor: encodeObject({ data: {}, args }),
                },
              ],
              pageInfo: {
                hasNextPage,
                hasPreviousPage,
                startCursor: encodeObject({ data: {}, args }),
                endCursor: encodeObject({ data: {}, args }),
              },
            };
            expect(response).toEqual(expected);
          });
        });
      });

      describe('AND the "createPageInfo" field', () => {
        describe('WHEN the "createPageInfo" field is not provided', () => {
          test('THEN it should return the connection', () => {
            const config = {};
            const response = createConnection(records, hasNextPage, hasPreviousPage, args, config);
            const expected = {
              edges: [
                {
                  node: { id: 'mockId1' },
                  cursor: encodeObject({ data: {}, args }),
                },
                {
                  node: { id: 'mockId2' },
                  cursor: encodeObject({ data: {}, args }),
                },
              ],
              pageInfo: {
                hasNextPage,
                hasPreviousPage,
                startCursor: encodeObject({ data: {}, args }),
                endCursor: encodeObject({ data: {}, args }),
              },
            };
            expect(response).toEqual(expected);
          });
        });

        describe('WHEN the "createPageInfo" field is provided', () => {
          test('THEN it should return the connection', () => {
            const config = { createPageInfo };
            const response = createConnection(records, hasNextPage, hasPreviousPage, args, config);
            const expected = {
              edges: [
                {
                  node: { id: 'mockId1' },
                  cursor: encodeObject({ data: {}, args }),
                },
                {
                  node: { id: 'mockId2' },
                  cursor: encodeObject({ data: {}, args }),
                },
              ],
              pageInfo: {
                hasNextPage,
                hasPreviousPage,
                startCursor: encodeObject({ data: {}, args }),
                endCursor: encodeObject({ data: {}, args }),
              },
            };
            expect(response).toEqual(expected);
          });
        });
      });

      describe('And the "encodeObject" field', () => {
        describe('WHEN the "encodeObject" field is not provided', () => {
          test('THEN it should return the connection', () => {
            const config = {};
            const response = createConnection(records, hasNextPage, hasPreviousPage, args, config);
            const expected = {
              edges: [
                {
                  node: { id: 'mockId1' },
                  cursor: encodeObject({ data: {}, args }),
                },
                {
                  node: { id: 'mockId2' },
                  cursor: encodeObject({ data: {}, args }),
                },
              ],
              pageInfo: {
                hasNextPage,
                hasPreviousPage,
                startCursor: encodeObject({ data: {}, args }),
                endCursor: encodeObject({ data: {}, args }),
              },
            };
            expect(response).toEqual(expected);
          });
        });

        describe('WHEN the "encodeObject" field is provided', () => {
          test('THEN it should return the connection', () => {
            const config = { encodeObject };
            const response = createConnection(records, hasNextPage, hasPreviousPage, args, config);
            const expected = {
              edges: [
                {
                  node: { id: 'mockId1' },
                  cursor: encodeObject({ data: {}, args }),
                },
                {
                  node: { id: 'mockId2' },
                  cursor: encodeObject({ data: {}, args }),
                },
              ],
              pageInfo: {
                hasNextPage,
                hasPreviousPage,
                startCursor: encodeObject({ data: {}, args }),
                endCursor: encodeObject({ data: {}, args }),
              },
            };
            expect(response).toEqual(expected);
          });
        });
      });
    });
  });
});
