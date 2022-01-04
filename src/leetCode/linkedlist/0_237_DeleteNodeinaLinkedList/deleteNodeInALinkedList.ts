// https://leetcode-cn.com/problems/delete-node-in-a-linked-list/
// 如何让自己在世界上消失，但又不死？ —— 将自己完全变成另一个人，再杀了那个人就行了。
function deleteNode(root: ListNode | null): void {
  [root.val, root.next] = [root.next.val, root.next.next];
};
