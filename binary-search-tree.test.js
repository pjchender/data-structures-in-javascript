const BST = require('./binary-search-tree');

describe('Test Binary Search Tree', () => {
  test('create BST', () => {
    const bst = new BST(50);

    expect(bst).toMatchObject({
      value: 50,
      right: null,
      left: null,
    });
  });

  test('insert BST when left and right are null', () => {
    const bst = new BST(50);
    bst.insert(30);
    expect(bst).toMatchObject({
      value: 50,
      right: null,
      left: {
        value: 30,
      },
    });

    const rightNewNode = bst.insert(60);
    expect(bst).toMatchObject({
      value: 50,
      right: { value: 60 },
      left: { value: 30 },
    });
  });

  test('insert BST when left and right are existed', () => {
    const bst = new BST(50);
    bst.insert(30);
    bst.insert(60);
    bst.insert(70);
    bst.insert(55);

    expect(bst).toMatchObject({
      value: 50,
      right: {
        value: 60,
      },
      left: {
        value: 30,
      },
    });

    expect(bst.right).toMatchObject({
      value: 60,
      right: {
        value: 70,
      },
      left: {
        value: 55,
      },
    });
  });
});

describe('Test utility for BST', () => {
  const bst = new BST(50);

  beforeAll(() => {
    bst.insert(30);
    bst.insert(70);
    bst.insert(100);
    bst.insert(60);
    bst.insert(59);
    bst.insert(20);
    bst.insert(45);
    bst.insert(35);
    bst.insert(85);
    bst.insert(105);
    bst.insert(10);
  });

  test('test insert node correctly', () => {
    expect(bst.right.right.value).toBe(100);
    expect(bst.left.left.value).toBe(20);
    expect(bst.left.right.left.value).toBe(35);
    expect(bst.left.right.right).toBe(null);
  });

  test('contains', () => {
    expect(bst.contains(35)).toBeTruthy();
    expect(bst.contains(85)).toBeTruthy();
    expect(bst.contains(10)).toBeTruthy();
    expect(bst.contains(12)).toBeFalsy();
    expect(bst.contains(101)).toBeFalsy();
    expect(bst.contains(58)).toBeFalsy();
  });

  test('depthFirstTraversal', () => {
    const mockIteratorFunc = jest.fn((value) => value);
    bst.depthFirstTraversal(mockIteratorFunc);
    expect(mockIteratorFunc.mock.calls.length).toBe(12);
    expect(mockIteratorFunc.mock.results[0].value).toBe(10);
  });
});
