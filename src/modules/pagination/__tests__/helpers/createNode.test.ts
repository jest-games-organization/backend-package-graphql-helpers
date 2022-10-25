import { createNode } from '../../helpers/createNode';

describe('GIVEN the createNode method', () => {
  let record: { [key: string]: any };
  let response: { [key: string]: any };
  let expected: { [key: string]: any };

  beforeEach(() => {
    record = { id: 'mockId' };
  });

  test('THEN it should create a node from the given record', () => {
    response = createNode(record);
    expected = { id: 'mockId' };
    expect(response).toEqual(expected);
  });
});
