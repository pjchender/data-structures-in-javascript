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
  const total = [...key].reduce(
    (accumulate, current) => accumulate + current.codePointAt(),
    0,
  );
  return total % this.numberBuckets; // bucketIndex should not larger than bucket size
};

// 用來新增 Node 到 HashTable 中
// 若該 bucket 已經有資料，則透過 Linked List 的概念，放到 next 中
// 若該 key 已經存在，則進行更新
HashTable.prototype.insert = function insert({ key, value }) {
  const index = this.hash(key);
  if (!this.buckets[index]) {
    this.buckets[index] = new HashNode({ key, value });
  } else {
    let currentNode = this.buckets[index];
    if (currentNode.key === key) {
      currentNode.value = value;
      return;
    }

    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }

    currentNode.next = new HashNode({ key, value });
  }
};

// 根據 key 取得 value
HashTable.prototype.get = function get(key) {
  const index = this.hash(key);
  if (!this.buckets[index]) {
    return null;
  }
  let currentNode = this.buckets[index];

  while (currentNode) {
    if (currentNode.key === key) {
      return currentNode.value;
    }

    currentNode = currentNode.next;
  }
  return null;
};

// 取得所有 Buckets 中的 Node
HashTable.prototype.retrieveAll = function retrieveAll() {
  return this.buckets
    .filter((b) => b)
    .reduce((buckets, currentBucket) => {
      let currentNode = currentBucket;
      const nodesInBucket = [];

      while (currentNode) {
        nodesInBucket.push(currentNode);
        currentNode = currentNode.next;
      }

      return buckets.concat(nodesInBucket);
    }, []);
};

module.exports = HashTable;
