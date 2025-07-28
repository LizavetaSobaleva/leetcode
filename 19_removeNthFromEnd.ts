function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let left: ListNode | null = head
    let right: ListNode | null = head
    let prev: ListNode | null = null;

    for (let i = 1; i < n; i++) {
        right = right!.next
    }

    while (right && right.next) {
        prev = left
        left = left!.next
        right = right.next
    }

    if (prev === null) {
        return head!.next
    }

    prev.next = left!.next
    return head
};