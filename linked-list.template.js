/* eslint-disable */
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node({ value, next, prev }) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// 輸入 value 後，把該值添加到 Linked List 的最前方
LinkedList.prototype.addToHead = function addToHead(value) {
  /* ... */
};

// 輸入 value 後，把該值添加到 Linked List 的最後方
LinkedList.prototype.addToTail = function addToTail(value) {
  /* ... */
};

// 移除 Linked List 的第一個 Node，若 Head 存在則回傳被移除的值，否則回傳 null
LinkedList.prototype.removeHead = function removeHead() {
  /* ... */
};

// 移除 Linked List 的最後一個 Node，若 Head 存在則回傳被移除的值，否則回傳 null
LinkedList.prototype.removeTail = function removeTail() {
  /* ... */
};

// 輸入 value 後，搜尋此 LinkedList 中是否有此值
// 找不到的話回傳 null，否則回傳找的的值
LinkedList.prototype.search = function search(searchValue) {
  /* ... */
};

// 列出所有等同於 searchValue 的 indexes
LinkedList.prototype.indexOf = function indexOf(searchValue) {
  /* ... */
};

module.exports = {
  LinkedList,
  Node,
};
