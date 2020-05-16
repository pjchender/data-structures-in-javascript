function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function insert(value) {
  const newNode = new BST(value);

  if (newNode.value <= this.value) {
    if (!this.left) {
      this.left = newNode;
    } else {
      this.left.insert(value);
    }
  } else if (!this.right) {
    this.right = newNode;
  } else {
    this.right.insert(value);
  }
};

// 判斷 BST 中是否包含此值，回傳 true/false
BST.prototype.contains = function contains(value) {
  if (value === this.value) {
    return true;
  }
  if (value < this.value) {
    if (!this.left) {
      return false;
    }
    return this.left.contains(value);
  }
  if (value > this.value) {
    if (!this.right) {
      return false;
    }
    return this.right.contains(value);
  }
  return null;
};

// depthFirstTraversal 可以用來疊代 Binary Search Tree 中的所有元素
const ORDER_TYPE = {
  IN_ORDER: 'IN_ORDER', // 將所有元素打平後由左至右排列
  PRE_ORDER: 'PRE_ORDER', // 由上往下，由左至右
  POST_ORDER: 'POST_ORDER', // 由下往上，由左至右
};

BST.prototype.depthFirstTraversal = function depthFirstTraversal(
  iteratorFunc,
  order = ORDER_TYPE.IN_ORDER,
) {
  if (order === ORDER_TYPE.PRE_ORDER) {
    iteratorFunc(this.value);
  }

  if (this.left) {
    this.left.depthFirstTraversal(iteratorFunc, order);
  }

  if (order === ORDER_TYPE.IN_ORDER) {
    iteratorFunc(this.value);
  }

  if (this.right) {
    this.right.depthFirstTraversal(iteratorFunc, order);
  }

  if (order === ORDER_TYPE.POST_ORDER) {
    iteratorFunc(this.value);
  }
};

BST.prototype.breadthFirstTraversal = function breadthFirstTraversal(
  iteratorFunc,
) {
  const queue = [this];
  while (queue.length) {
    const currentNode = queue.shift();
    iteratorFunc(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
};

BST.prototype.getMinVal = function getMinVal() {
  if (this.left) {
    return this.left.getMinVal();
  }
  return this.value;
};

BST.prototype.getMaxVal = function getMaxVal() {
  if (this.right) {
    return this.right.getMaxVal();
  }
  return this.value;
};

module.exports = {
  BST,
  ORDER_TYPE,
};
