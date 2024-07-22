function angular() {
  class node {
    constructor() {
      this.key = 0;
      this.count = 0;
      this.left = null;
      this.right = null;
    }
  }

  // A utility function to create a new BST node
  function newNode(item) {
    var temp = new node();
    temp.key = item;
    temp.left = temp.right = null;
    temp.count = 1;
    return temp;
  }

  // A utility function to do inorder
  // traversal of BST
  function inorder(root) {
    if (root != null) {
      inorder(root.left);
      document.write(root.key + "(" + root.count + ") ");
      inorder(root.right);
    }
  }

  /*
* A utility function to insert a new
node with given key in BST
*/
  function insert(node, key) {
    /* If the tree is empty, return a new node */
    if (node == null) return newNode(key);

    // If key already exists in BST,
    // increment count and return
    if (key == node.key) {
      node.count++;
      return node;
    }

    /* Otherwise, recur down the tree */
    if (key < node.key) node.left = insert(node.left, key);
    else node.right = insert(node.right, key);

    /* return the (unchanged) node pointer */
    return node;
  }

  /*
* Given a non-empty binary search tree,
return the node with minimum key value
* found in that tree. Note that the
entire tree does not need to be searched.
*/
  function minValueNode(node) {
    var current = node;

    /* loop down to find the leftmost leaf */
    while (current.left != null) current = current.left;

    return current;
  }

  /*
* Given a binary search tree and a key,
this function deletes a given key and
* returns root of modified tree
*/
  function deleteNode(root, key) {
    // base case
    if (root == null) return root;

    // If the key to be deleted is smaller than the
    // root's key, then it lies in left subtree
    if (key < root.key) root.left = deleteNode(root.left, key);
    // If the key to be deleted is greater than
    // the root's key, then it lies in right subtree
    else if (key > root.key) root.right = deleteNode(root.right, key);
    // if key is same as root's key
    else {
      // If key is present more than once,
      // simply decrement count and return
      if (root.count > 1) {
        root.count--;
        return root;
      }

      // ElSE, delete the node

      // node with only one child or no child
      if (root.left == null) {
        var temp = root.right;
        root = null;
        return temp;
      } else if (root.right == null) {
        var temp = root.left;
        root = null;
        return temp;
      }

      // node with two children: Get the inorder
      // successor (smallest in the right subtree)
      var temp = minValueNode(root.right);

      // Copy the inorder successor's
      // content to this node
      root.key = temp.key;
      root.count = temp.count;

      // Delete the inorder successor
      root.right = deleteNode(root.right, temp.key);
    }
    return root;
  }

  // Driver Code

  /*
    * Let us create following BST
    12(3) / \ 10(2) 20(1) / \ 9(1) 11(1)
    */
  var root = null;
  root = insert(root, "she");
  root = insert(root, "had");
  root = insert(root, "had");
  root = insert(root, "to");
  root = insert(root, "address");
  root = insert(root, "Problems");

  document.write("Inorder traversal of " + "the given tree " + "<br/>");
  inorder(root);

  // document.write("<br/>Delete 20<br/>");
  // root = deleteNode(root, 20);
  // document.write("Inorder traversal of "
  // + "the modified tree <br/>");
  // inorder(root);

  // document.write("<br/>Delete 12<br/>");
  // root = deleteNode(root, 12);
  // document.write("Inorder traversal of "
  // + "the modified tree <br/>");
  // inorder(root);

  // document.write("<br/>Delete 9<br/>");
  // root = deleteNode(root, 9);
  // document.write("Inorder traversal of "
  // + "the modified tree <br/>");
  // inorder(root);
}

function javascripts() {
  function averageZeroes(a) {
    console.log("a", a);
    const rows = a.length;
    const cols = a[0].length;
    let b = [...Array(rows)].map((e) => Array(cols));
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        let v = a[r][c];
        if (v == 0) {
          let n = 0;
          if (r > 0) {
            n++;
            v += a[r - 1][c];
          }
          if (r < rows - 1) {
            n++;
            v += a[r + 1][c];
          }
          if (c > 0) {
            n++;
            v += a[r][c - 1];
          }
          if (c < cols - 1) {
            n++;
            v += a[r][c + 1];
          }
          b[r][c] = v / n;
        } else {
          b[r][c] = a[r][c];
        }
      }
    }
    return b;
  }

  function test(a) {
    const p = (m) => JSON.stringify(m).replaceAll("],[", "],\n [");
    // console.log(p(a));
    // console.log(p(averageZeroes(a)));
    document.write("Input" + "CSV <br/>");
    document.write(p(a));
    document.write("<br/>Output" + "CSV <br/>");
    document.write(p(averageZeroes(a)));
  }

  test([
    [1, 2, 3],
    [4, 8, 1],
    [0, 1, 9],
  ]);

}

;
//# sourceMappingURL=scripts.js.map