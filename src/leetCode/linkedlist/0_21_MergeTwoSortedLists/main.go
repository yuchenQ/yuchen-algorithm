package mergetwosortedlist

type ListNode struct {
	Val  int
	Next *ListNode
}

// https://leetcode-cn.com/problems/merge-two-sorted-lists/
// 时间复杂度：O(m+n)
// 空间复杂度：O(1)
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	dummy := &ListNode{}
	pre := dummy

	for l1 != nil && l2 != nil {
		if l1.Val < l2.Val {
			pre.Next, l1 = l1, l1.Next
		} else {
			pre.Next, l2 = l2, l2.Next
		}
		pre = pre.Next
	}

	if l1 != nil {
		pre.Next = l1
	}
	if l2 != nil {
		pre.Next = l2
	}

	return dummy.Next
}

// 时间复杂度：O(m+n)
// 空间复杂度：O(m+n)
func mergeTwoListsRecurrence(l1 *ListNode, l2 *ListNode) *ListNode {
	if l1 == nil {
		return l2
	} else if l2 == nil {
		return l1
	}

	if l1.Val < l2.Val {
		l1.Next = mergeTwoListsRecurrence(l1.Next, l2)
		return l1
	} else {
		l2.Next = mergeTwoListsRecurrence(l1, l2.Next)
		return l2
	}
}
