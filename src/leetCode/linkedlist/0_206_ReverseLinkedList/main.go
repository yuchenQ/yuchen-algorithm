package reverselinkedlist

type ListNode struct {
	Val  int
	Next *ListNode
}

// https://leetcode-cn.com/problems/reverse-linked-list/

// 时间复杂度：O(2n)，其中 n 是链表的长度。需要遍历链表一次。
// 空间复杂度：O(n)。
func reverseListStack(head *ListNode) *ListNode {
	var stack []int

	for head != nil {
		stack = append(stack, head.Val)
		head = head.Next
	}

	result := &ListNode{}
	dummy := result

	for i := len(stack) - 1; i >= 0; i-- {
		dummy.Next = &ListNode{
			Val: stack[i],
		}
		dummy = dummy.Next
	}

	return result.Next
}

// 时间复杂度：O(n)，其中 n 是链表的长度。需要遍历链表一次。
// 空间复杂度：O(1)。
func reverseListIteration(head *ListNode) *ListNode {
	var (
		prev *ListNode = nil
		cur  *ListNode = head
		next *ListNode
	)

	for cur != nil {
		next = cur.Next

		cur.Next = prev
		prev = cur
		cur = next
	}

	return prev
}

// 时间复杂度：O(n)，其中 n 是链表的长度。需要对链表的每个节点进行反转操作。
// 空间复杂度：O(n)，其中 n 是链表的长度。空间复杂度主要取决于递归调用的栈空间，最多为 n 层。
func reverseListRecursion(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}

	p := reverseListRecursion(head.Next)
	head.Next.Next = head
	head.Next = nil

	return p
}
