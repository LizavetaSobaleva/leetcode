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

function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  let result: number[] = [];

  result.push(root.val);
  result.push(...preorderTraversal(root.left));
  result.push(...preorderTraversal(root.right));

  return result;
}

function preorderTraversal_2(root: TreeNode | null): number[] {
  if (!root) return [];

  let stack: TreeNode[] = [root];
  let result: number[] = [];

  while (stack.length) {
    let node = stack.pop();
    result.push(node!.val);

    if (node?.right) stack.push(node.right);
    if (node?.left) stack.push(node.left);
  }

  return result;
}
