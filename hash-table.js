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
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode({ key, value });
  }
};

module.exports = HashTable;
