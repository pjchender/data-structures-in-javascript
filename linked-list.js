function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node({ value, next, prev }) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function addToHead(value) {
  const newNode = new Node({ value, next: this.head, prev: null });
  if (this.head) {
    this.head.prev = newNode;
  } else {
    // 表示目前 list 中沒有任何 Node
    this.tail = newNode;
  }
  this.head = newNode;
};

LinkedList.prototype.addToTail = function addToTail(value) {
  const newNode = new Node({ value, next: null, prev: this.tail });
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    // 表示目前 list 中沒有任何 Node
    this.head = newNode;
  }
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function removeHead() {
  if (!this.head) return null;
  const removeHeadValue = this.head.value;

  // 把原本的第二個變成第一個
  this.head = this.head.next;

  if (this.head) {
    // 如果第一個存在，則表示它沒有前一個
    this.head.prev = null;
  } else {
    // 如果第一個不存在，則 list 中沒有任何元素
    this.tail = null;
  }
  return removeHeadValue;
};

LinkedList.prototype.removeTail = function removeTail() {
  if (!this.tail) return null;
  const removeTailValue = this.tail.value;

  // 把原本的倒數第二個變成最後一個
  this.tail = this.tail.prev;

  if (this.tail) {
    // 如果最後一個存在，則它沒有下一個
    this.tail.next = null;
  } else {
    // 如果最後一個不存在，表示這個 list 中沒有任何元素
    this.head = null;
  }

  return removeTailValue;
};

LinkedList.prototype.search = function search(searchValue) {
  let currentNode = this.head;

  while (currentNode) {
    if (currentNode.value === searchValue) {
      return searchValue;
    }

    currentNode = currentNode.next;
  }

  return null;
};

LinkedList.prototype.indexOf = function indexOf(searchValue) {
  let currentNode = this.head;
  const indexes = [];
  let currentIndex = 0;

  while (currentNode) {
    if (currentNode.value === searchValue) {
      indexes.push(currentIndex);
    }

    currentIndex += 1;
    currentNode = currentNode.next;
  }

  return indexes;
};

module.exports = LinkedList;
