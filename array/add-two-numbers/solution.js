/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const cur = l1;

  while(cur) {
    if(l2 != null) {
      cur.val += l2.val;
      l2 = l2.next;
    }
  }

  return cur;

};
