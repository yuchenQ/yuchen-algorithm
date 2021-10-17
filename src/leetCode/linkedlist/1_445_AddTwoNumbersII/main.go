package addtwonumbersii

import "yuchen-algorithm/src/leetCode/helper"

type ListNode struct {
	Val  int
	Next *ListNode
}

// https://leetcode-cn.com/problems/add-two-numbers-ii/

// 时间复杂度：O(max(m,n))，其中 m 和 n 分别为两个链表的长度。我们需要遍历两个链表的全部位置，
// 而处理每个位置只需要 O(1) 的时间。
// 空间复杂度：O(m+n)，其中 m 和 n 分别为两个链表的长度。空间复杂度主要取决于我们把链表内容放入栈中所用的空间。
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	var list1, list2 []int

	for l1 != nil {
		list1 = append(list1, l1.Val)
		l1 = l1.Next
	}

	for l2 != nil {
		list2 = append(list2, l2.Val)
		l2 = l2.Next
	}

	var result *ListNode
	carry := 0

	for i := 0; i < helper.Max(len(list1), len(list2)); i++ {
		sum := carry

		if i < len(list1) {
			sum += list1[len(list1)-i-1]
		}

		if i < len(list2) {
			sum += list2[len(list2)-i-1]
		}

		node := &ListNode{sum % 10, nil}
		if result == nil {
			result = node
		} else {
			node.Next = result
			result = node
		}

		carry = sum / 10
	}

	if carry > 0 {
		result = &ListNode{1, result}
	}

	return result
}
