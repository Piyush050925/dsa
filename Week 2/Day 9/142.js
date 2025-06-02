// 142. Linked List Cycle II
// https://leetcode.com/problems/linked-list-cycle-ii

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) break;
    }
    
    if (!fast || !fast.next) return null;

    fast = head;
    while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow;    
};

const head = createLinkedList([3, 2, 0, -4], 1);
console.log(head);
console.log(detectCycle(head));

// TC = O(n)
// SC = O(1)