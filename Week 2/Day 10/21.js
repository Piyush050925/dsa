// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let check  = new ListNode();
    let res = check;

    while (list1 && list2) {
        if (list1.val > list2.val) {
            res.next = list2;
            list2 = list2.next;
        } else {
            res.next = list1;
            list1 = list1.next;
        }
        res = res.next;
    }

    if (list1) {
        res.next = list1;
    }

    if (list2) {
        res.next = list2;
    }

    return check.next;
};