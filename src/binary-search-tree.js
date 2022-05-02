const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.Root = null;
}

  root() {
    return this.Root;
  }

  add(data) {
    this.Root = addWithin(this.Root, data);

    function addWithin(node, data) {
      if(!node) {
        return new Node(data);
      }
      if(node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data)
      }
      return node;
    }
  }
//    let newNode = new Node(data);
//    if (this.Root === null) {
//        this.Root = newNode;
//    } else {
//        this.insertNode(this.Root, newNode);
//    }
//    
//  }
//  insertNode(node, newNode) {
//    if (newNode.data < node.data) {
//        if (node.left === null) {
//            node.left = newNode;
//        } else {
//            this.insertNode(node.left, newNode);
//        }
//    } else {
//        if (node.right === null) {
//            node.right = newNode;
//        } else {
//            this.insertNode(node.right, newNode);
//        }
//    }
//}

  has(data) {
    return searchWithin(this.Root, data);

    function searchWithin(node, data) {
      if(!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }

    return data < node.data ?
      searchWithin(node.left, data) :
      searchWithin(node.right, data);
    }
  }

  find(data) {
    return search (this.Root, data);
    function search (node, data) {
      if (node === null) {
        return null;
      } else if (data < node.data) {
        return search(node.left, data);
      } else if (data > node.data) {
        return search(node.right, data)
      } else {
        return node;
      }
    }
  }

  remove(data) {
    this.Root = removeNode(this.Root, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromR = node.right;
        while (minFromR.left) {
          minFromR = minFromR.left;
        }
        node.data = minFromR.data;
        node.right = removeNode(node.right, minFromR.data);
        return node;
      }
    }
  }

  min() {
    if (!this.Root) {
      return;
    }
    let node = this.Root;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.Root) {
      return;
    }
    let node = this.Root;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}


module.exports = {
  BinarySearchTree
};