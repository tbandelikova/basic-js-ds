const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let node = new Node(data);
    let root = this.rootNode;
    if (root == null) {
      root = node;
    } else {
      if (data < root.data) {
        if (root.left === null)
          root.left = node;
        else {
          root = root.left;
          this.add(data);
        }
      } else {
        if (root.right === null)
          root.right = node;
        else {
          root = root.right;
          this.add(data);
        }
      }
    }
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    if (!this.rootNode) return null;
    let node = this.rootNode;
    if (data < node.data) {
      if (node.left.data == data) {
        return node;
      } else {
        node = node.left;
        if (!node) return null;
        this.find(data);
      }
    } else {
      if (node.data == data) {
        return node;
      } else {
        node = node.right;
        if (!node) return null;
        this.find(data);
      }
    }
  }

  remove(data) {
    if (this.has(data)) {
      let node = this.rootNode;
      if (data < node.data) {
        node = node.left;
        this.remove(data);
        return node;
      } else if (data > node.data) {
        node = node.right;
        this.remove(data);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        if (node.left === null) {
          node = node.right;
          return node;
        }
        else if (node.right === null) {
          node = node.left;
          return node;
        }
      }
    } else {
      return null;
    }
  }

  min() {
    let node = this.rootNode;
    if (node.left === null) {
      return node;
    } else {
      return this.min(node.left);
    }
  }

  max() {
    let node = this.rootNode;
    if (node.right === null) {
      return node;
    } else {
      return this.min(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};