// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle

const { createLinkedList, ListNode } = require('../createLL.js');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast == slow) {
            return true;
        }
    }

    return false;
};

const head = createLinkedList([3, 2, 0, -4], 1);
console.log(head);
console.log(hasCycle(head));

// TC = O(n)
// SC = O(1)