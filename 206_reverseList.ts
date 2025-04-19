function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  while (head) {
    const tmp: ListNode | null = head.next;
    head.next = prev;
    prev = head;
    head = tmp;
  }
  return prev;
}
