class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reorderList(head: ListNode | null): void {
  if (!head || !head.next || !head.next.next) return;

  const stack = [];
  let node = head;
  while (node) {
    stack.push(node);
    node = node.next;
  }

  let half = Math.floor(stack.length / 2);
  let current = head;

  for (let i = 0; i < half; i++) {
    let last = stack.pop();
    last.next = current.next;
    current.next = last;
    current = last.next;
  }

  current!.next = null;
}
