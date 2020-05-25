/* eslint-disable */
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// 在 BST 中插入值
BST.prototype.insert = function insert(value) {
  /* ... */
};

// 判斷 BST 中是否包含此值，回傳 true/false
BST.prototype.contains = function contains(value) {
  /* ... */
};

// depthFirstTraversal 可以用來疊代 Binary Search Tree 中的所有元素
const ORDER_TYPE = {
  IN_ORDER: 'IN_ORDER', // 將所有元素打平後由左至右排列
  PRE_ORDER: 'PRE_ORDER', // 由上往下，由左至右
  POST_ORDER: 'POST_ORDER', // 由下往上，由左至右
};

BST.prototype.depthFirstTraversal = function depthFirstTraversal(
  iteratorFunc,
  order = ORDER_TYPE.IN_ORDER
) {
  /* ... */
};

// 疊代 BST 中的所有元素
BST.prototype.breadthFirstTraversal = function breadthFirstTraversal(
  iteratorFunc
) {
  /* ... */
};

// 取得 BST 中的最小值
BST.prototype.getMinVal = function getMinVal() {
  /* ... */
};

// 取得 BST 中的最大值
BST.prototype.getMaxVal = function getMaxVal() {
  /* ... */
};

module.exports = {
  BST,
  ORDER_TYPE,
};
