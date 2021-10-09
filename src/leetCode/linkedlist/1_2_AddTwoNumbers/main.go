package addtwonumbers

type ListNode struct {
	Val  int
	Next *ListNode
}

// https://leetcode-cn.com/problems/add-two-numbers/

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	result := &ListNode{0, nil}
	dummy := result

	tmp := 0

	for l1 != nil || l2 != nil || tmp != 0 {
		if l1 != nil {
			tmp += l1.Val
			l1 = l1.Next
		}
		if l2 != nil {
			tmp += l2.Val
			l2 = l2.Next
		}

		dummy.Next = &ListNode{tmp % 10, nil}
		dummy = dummy.Next
		tmp = tmp / 10
	}

	return result.Next
}
