// size 會決定在 hashTable 中有多少 buckets
function HashTable(size) {
  this.buckets = Array(size);
  this.numberBuckets = this.buckets.length;
}

function HashNode({ key, value, next = null }) {
  this.key = key;
  this.value = value;
  this.next = next;
}

HashTable.prototype.hash = function hash(key) {
  const total = [...key].reduce(
    (accumulate, current) => accumulate + current.codePointAt(),
    0,
  );
  return total % this.numberBuckets; // bucketIndex should not larger than bucket size
};

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

module.exports = HashTable;
