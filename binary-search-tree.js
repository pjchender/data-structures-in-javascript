function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function insert(value) {
  let newNode = new BST(value);

  if (newNode.value <= this.value) {
    if (!this.left) {
      this.left = newNode;
    } else {
      this.left.insert(value);
    }
  } else {
    if (!this.right) {
      this.right = newNode;
    } else {
      this.right.insert(value);
    }
  }
};

// 判斷 BST 中是否包含此值，回傳 true/false
BST.prototype.contains = function contains(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
};

// depthFirstTraversal 可以用來疊代 Binary Search Tree 中的所有元素
BST.prototype.depthFirstTraversal = function depthFirstTraversal(iteratorFunc) {
  if (this.left) {
    this.left.depthFirstTraversal(iteratorFunc);
  }
  iteratorFunc(this.value);
  if (this.right) {
    this.right.depthFirstTraversal(iteratorFunc);
  }
};

module.exports = BST;
