/* global describe, test, expect, beforeAll */

const HashTable = require('./hash-table');

describe('Test Hash Table', () => {
  let ht;
  beforeAll(() => {
    ht = new HashTable(30);
  });

  test('create hashTable instance', () => {
    expect(ht.buckets).toEqual(Array(30));
    expect(ht.numberBuckets).toBe(30);
  });

  test('hash method', () => {
    const bucketIndex = ht.hash('Becca');
    expect(bucketIndex).toBe(12);
  });

  test('insert', () => {
    let bucketIndex;
    const dean = { key: 'Dean', value: 'dean@gmail.com' };
    bucketIndex = ht.hash(dean.key);
    ht.insert(dean);
    expect(ht.buckets[bucketIndex]).toEqual({ ...dean, next: null });

    const megan = { key: 'Megan', value: 'megan@gmail.com' };
    bucketIndex = ht.hash(megan.key);
    ht.insert(megan);
    expect(ht.buckets[bucketIndex]).toEqual({ ...megan, next: null });

    const dane = { key: 'Dane', value: 'dane@yahoo.com ' };

    bucketIndex = ht.hash(dane.key);
    ht.insert(dane);
    expect(ht.buckets[bucketIndex]).toEqual({ ...dean, next: { ...dane, next: null } });
  });
});
