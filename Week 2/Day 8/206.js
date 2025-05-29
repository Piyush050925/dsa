// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/

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
var reverseList = function (head) {
    let curr = head;
    let prev = null;

    while (head) {
        curr = head;
        head = head.next;
        curr.next = prev;
        prev = curr;
    }

    return prev;
};

console.log(reverseList([1,2,3,4,5]));

// TC = O(n)
// SC = O(1)