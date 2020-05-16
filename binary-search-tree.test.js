/* global jest, describe, test, expect, beforeAll */
const { BST, ORDER_TYPE } = require('./binary-search-tree');

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

    bst.insert(60);
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

  test('depthFirstTraversal without order (default: in-order)', () => {
    const mockIteratorFunc = jest.fn((value) => value);
    bst.depthFirstTraversal(mockIteratorFunc);
    expect(mockIteratorFunc.mock.calls.length).toBe(12);
    expect(mockIteratorFunc.mock.results[0].value).toBe(10);
  });

  test('depthFirstTraversal with order', () => {
    const mockIteratorFunc = jest.fn((value) => value);

    // IN_ORDER，
    bst.depthFirstTraversal(mockIteratorFunc, ORDER_TYPE.IN_ORDER);
    expect(mockIteratorFunc.mock.calls.length).toBe(12);
    expect(mockIteratorFunc.mock.results.map((r) => r.value)).toEqual([
      10, 20, 30, 35, 45,
      50, 59, 60, 70, 85,
      100, 105,
    ]);

    // PRE_ORDER，由上往下，由左至右
    mockIteratorFunc.mockClear();
    bst.depthFirstTraversal(mockIteratorFunc, ORDER_TYPE.PRE_ORDER);
    expect(mockIteratorFunc.mock.calls.length).toBe(12);
    expect(mockIteratorFunc.mock.results.map((r) => r.value)).toEqual([
      50, 30, 20, 10,
      45, 35,
      70, 60, 59,
      100, 85,
      105,
    ]);

    // POST_ORDER，
    mockIteratorFunc.mockClear();
    bst.depthFirstTraversal(mockIteratorFunc, ORDER_TYPE.POST_ORDER);
    expect(mockIteratorFunc.mock.calls.length).toBe(12);
    expect(mockIteratorFunc.mock.results.map((r) => r.value)).toEqual([
      10, 20, 35, 45, 30,
      59, 60,
      85, 105, 100,
      70, 50,
    ]);
  });

  test('breadthFirstTraversal', () => {
    const mockIteratorFunc = jest.fn((value) => value);
    bst.breadthFirstTraversal(mockIteratorFunc, ORDER_TYPE.POST_ORDER);
    expect(mockIteratorFunc.mock.calls.length).toBe(12);

    expect(mockIteratorFunc.mock.results.map((r) => r.value)).toEqual([
      50,
      30, 70,
      20, 45, 60, 100,
      10, 35, 59, 85, 105,
    ]);
  });

  test('getMinVal', () => {
    const minVal = bst.getMinVal();
    expect(minVal).toBe(10);
  });

  test('getMaxVal', () => {
    const maxVal = bst.getMaxVal();
    expect(maxVal).toBe(105);
  });
});
