import { createNode } from '../../helpers/createNode';

describe('GIVEN the createNode method', () => {
  let record: { [key: string]: unknown };
  let response: { [key: string]: unknown };
  let expected: { [key: string]: unknown };

  beforeEach(() => {
    record = { id: 'mockId' };
  });

  test('THEN it should create a node from the given record', () => {
    response = createNode(record);
    expected = { id: 'mockId' };
    expect(response).toEqual(expected);
  });
});
