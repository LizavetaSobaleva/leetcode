function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let first = head;
  let second = head.next;

  first.next = swapPairs(second.next);
  second.next = first;

  return second;
}
