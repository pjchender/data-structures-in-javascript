/* global describe, test, expect, beforeEach, beforeAll */

const HashTable = require('./hash-table');

describe('Test Hash Table', () => {
  let ht;
  beforeEach(() => {
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

    const dane = { key: 'Dane', value: 'dane@yahoo.com' };

    bucketIndex = ht.hash(dane.key);
    ht.insert(dane);
    expect(ht.buckets[bucketIndex]).toEqual({
      ...dean,
      next: { ...dane, next: null },
    });
  });

  test('insert with update info feature', () => {
    let bucketIndex;

    const dean = { key: 'Dean', value: 'dean@gmail.com' };
    bucketIndex = ht.hash(dean.key);
    ht.insert(dean);
    expect(ht.buckets[bucketIndex]).toEqual({ ...dean, next: null });

    const updatedDean = { ...dean, value: 'dean@yahoo.com' };
    ht.insert(updatedDean);
    expect(ht.buckets[bucketIndex]).toEqual({
      ...updatedDean,
      next: null,
    });

    const dane = { key: 'Dane', value: 'dane@yahoo.com' };
    bucketIndex = ht.hash(dane.key);
    ht.insert(dane);
    expect(ht.buckets[bucketIndex]).toEqual({
      ...updatedDean,
      next: { ...dane, next: null },
    });
    const updatedDane = { ...dane, value: 'dane@gmail.com' };
    ht.insert(updatedDane);
    expect(ht.buckets[bucketIndex]).toEqual({
      ...updatedDean,
      next: { ...updatedDane, next: null },
    });
  });
});

describe('Test utilities for Hash Table', () => {
  let ht;
  beforeAll(() => {
    ht = new HashTable(30);
    ht.insert({ key: 'Dean', value: 'dean@gmail.com' });
    ht.insert({ key: 'Megan', value: 'megan@gmail.com' });
    ht.insert({ key: 'Dane', value: 'dane@yahoo.com' });
  });

  test('get', () => {
    expect(ht.get('Dean')).toBe('dean@gmail.com');
    expect(ht.get('Megan')).toBe('megan@gmail.com');
    expect(ht.get('Dane')).toBe('dane@yahoo.com');

    ht.insert({ key: 'Dean', value: 'dean@yahoo.com' });
    ht.insert({ key: 'Megan', value: 'megan@yahoo.com' });
    ht.insert({ key: 'Dane', value: 'dane@gamil.com' });

    expect(ht.get('Dean')).toBe('dean@yahoo.com');
    expect(ht.get('Megan')).toBe('megan@yahoo.com');
    expect(ht.get('Dane')).toBe('dane@gamil.com');
  });
});
