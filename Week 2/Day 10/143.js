// 143. Reorder List
// https://leetcode.com/problems/reorder-list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

    if (!head || !head.next || !head.next.next) return;
    
    // step 1 find mid
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // step 2 make two two parts
    let curr = slow.next;
    slow.next = null;
    let prev = null;

    // step 3 reverse the second half
    while (curr) {
        const tempNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tempNode;
    }

    // step 4 start merging two parts
    let first = head;
    let second = prev;
    while (second) {
        const temp1 = first.next;
        const temp2 = second.next;

        first.next = second;
        second.next = temp1;

        first = temp1;
        second = temp2;
    }
};

// TC = O(n)
// SC = O(1)