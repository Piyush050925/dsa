function ListNode(val) {
    this.val = val;
    this.next = null;
}

// arr: Array of values
// pos: index where tail connects to (use -1 for no cycle)
function createLinkedList(arr, pos) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;
    let cycleNode = null;

    for (let i = 1; i < arr.length; i++) {
        let newNode = new ListNode(arr[i]);
        current.next = newNode;
        current = newNode;

        if (i === pos) {
            cycleNode = newNode;
        }
    }

    if (pos === 0) {
        cycleNode = head;
    }

    if (pos !== -1) {
        current.next = cycleNode;
    }

    return head;
}

// head of list
function printLinkedList(head) {
    while(head) {
        console.log(head.val);
        head = head.next;
    }
}

module.exports = {
    createLinkedList,
    ListNode,
    printLinkedList,
};
