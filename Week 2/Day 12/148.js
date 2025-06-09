// 148. Sort List
// https://leetcode.com/problems/sort-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (!head || !head.next) return head;

    // 1. Find the middle of the list
    let slow = head, fast = head, prev = null;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. Cut the list into two halves
    prev.next = null;

    // 3. Sort each half
    const l1 = sortList(head);
    const l2 = sortList(slow);

    // 4. Merge the sorted halves
    return merge(l1, l2);
};

// Helper function to merge two sorted lists
function merge(l1, l2) {
    const dummy = new ListNode(0);
    let curr = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    curr.next = l1 || l2;

    return dummy.next;
}
