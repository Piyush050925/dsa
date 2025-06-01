// 876. Middle of the Linked List
// https://leetcode.com/problems/middle-of-the-linked-list

const { createLinkedList, ListNode } = require('../createLL.js');

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
var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

const head = createLinkedList([1, 2, 3, 4, 5], -1);
console.log(middleNode(head));

// TC = O(n)
// SC = O(1)