// 234. Palindrome Linked List
// https://leetcode.com/problems/palindrome-linked-list/
const { createLinkedList, printLinkedList } = require('../createLL');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let slow = head;
    let fast = head;

    // find mid
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse second half
    let prev = null;
    let curr = slow;
    
    while (curr) {
        let tempNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tempNode;

    }

    // start comparing two halves
    let first = head;
    let second = prev;

    while (second) {
        if (first.val != second.val) {
            return false;
        }
        first = first.next;
        second = second.next;
    }

    return true;
};

const head = createLinkedList([1,2,3,2,1], -1);
console.log(printLinkedList(head));
console.log(isPalindrome(head));

// TC = O(n)
// SC = O(1)