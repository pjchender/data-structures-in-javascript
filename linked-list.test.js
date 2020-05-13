/* global describe, test, expect */

const LinkedList = require('./linked-list');

describe('Test LinkedList', () => {
  test('Add to head', () => {
    const ll = new LinkedList();
    ll.addToHead(100);
    expect(ll).toMatchObject({ head: { value: 100 }, tail: { value: 100 } });

    ll.addToHead(50);
    expect(ll).toMatchObject({ head: { value: 50 }, tail: { value: 100 } });
  });

  test('Add to tail', () => {
    const ll = new LinkedList();
    ll.addToTail(50);
    expect(ll).toMatchObject({ head: { value: 50 }, tail: { value: 50 } });

    ll.addToTail(100);
    expect(ll).toMatchObject({ head: { value: 50 }, tail: { value: 100 } });
  });

  test('addToTail and addToHead', () => {
    const ll = new LinkedList();
    ll.addToTail(50);
    expect(ll).toMatchObject({ head: { value: 50 }, tail: { value: 50 } });

    ll.addToTail(100);
    expect(ll).toMatchObject({ head: { value: 50 }, tail: { value: 100 } });

    ll.addToHead(150);
    expect(ll).toMatchObject({ head: { value: 150 }, tail: { value: 100 } });

    ll.addToTail(200);
    expect(ll).toMatchObject({ head: { value: 150 }, tail: { value: 200 } });

    ll.addToHead(10);
    expect(ll).toMatchObject({ head: { value: 10 }, tail: { value: 200 } });
  });

  test('remove head', () => {
    const ll = new LinkedList();
    ll.addToTail(50);
    ll.addToTail(100);
    ll.addToHead(10);

    ll.removeHead();
    expect(ll).toMatchObject({ head: { value: 50 }, tail: { value: 100 } });

    ll.removeHead();
    expect(ll).toMatchObject({ head: { value: 100 }, tail: { value: 100 } });

    ll.removeHead();
    expect(ll).toMatchObject({ head: null, tail: null });
  });

  test('remove tail', () => {
    const ll = new LinkedList();
    ll.addToTail(50);
    ll.addToTail(100);
    ll.addToHead(10);

    ll.removeTail();
    expect(ll).toMatchObject({ head: { value: 10 }, tail: { value: 50 } });

    ll.removeTail();
    expect(ll).toMatchObject({ head: { value: 10 }, tail: { value: 10 } });

    ll.removeTail();
    expect(ll).toMatchObject({ head: null, tail: null });
  });
});

describe('test linked-list utilities', () => {
  const ll = new LinkedList();
  beforeAll(() => {
    ll.addToTail(50);
    ll.addToTail(100);
    ll.addToHead(10);
    ll.addToTail(10);
  });

  test('search', () => {
    expect(ll.search(10)).toBe(10);
    expect(ll.search(30)).toBe(null);
  });

  test('indexOf', () => {
    expect(ll.indexOf(10)).toEqual([0, 3]);
    expect(ll.indexOf(100)).toEqual([2]);
    expect(ll.indexOf(1)).toEqual([]);
  });
});
