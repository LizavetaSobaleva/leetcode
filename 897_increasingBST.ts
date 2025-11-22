class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function increasingBST(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  const order: TreeNode[] = [];

  function addInorder(node: TreeNode | null) {
    if (!node) return;
    addInorder(node.left);
    order.push(node);
    addInorder(node.right);
  }

  addInorder(root);

  root = order[0];

  for (let i = 0; i < order.length; i++) {
    order[i].left = null;
    order[i].right = i + 1 < order.length ? order[i + 1] : null;
  }

  return root;
}

var root = new TreeNode(4);
root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(increasingBST(root));
