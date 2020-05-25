/* eslint-disable */

// size 會決定在 hashTable 中有多少 buckets
function HashTable(size) {
  this.buckets = Array(size);
  this.numberBuckets = this.buckets.length;
}

// 每一個 key-value pair 稱作 Node
function HashNode({ key, value, next = null }) {
  this.key = key;
  this.value = value;
  this.next = next;
}

// 用來產生一個數值，此數值不能超過 buckets 的 size
HashTable.prototype.hash = function hash(key) {
  /* ... */
};

// 用來新增 Node 到 HashTable 中
// 若該 bucket 已經有資料，則透過 Linked List 的概念，放到 next 中
// 若該 key 已經存在，則進行更新
HashTable.prototype.insert = function insert({ key, value }) {
  /* ... */
};

// 根據 key 取得 value
HashTable.prototype.get = function get(key) {
  /* ... */
};

// 取得所有 Buckets 中的 Node
HashTable.prototype.retrieveAll = function retrieveAll() {
  /* ... */
};

module.exports = HashTable;
