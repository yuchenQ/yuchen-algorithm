package removenthnodefromendoflist

type ListNode struct {
	Val  int
	Next *ListNode
}

// 时间复杂度：O(L)，其中 L是链表的长度。
// 空间复杂度：O(1)
func removeNthFromEndDoublePointer(head *ListNode, n int) *ListNode {
	result := &ListNode{Next: head}
	var pre *ListNode
	cur := result

	gap := 1
	for head != nil {
		if gap >= n {
			pre, cur = cur, cur.Next
		}
		head = head.Next
		gap += 1
	}

	pre.Next = pre.Next.Next
	return result.Next
}

func getLength(head *ListNode) (length int) {
	for ; head != nil; head = head.Next {
		length++
	}

	return
}

// 时间复杂度：O(L)，其中 L是链表的长度。
// 空间复杂度：O(1)
func removeNthFromEndGetLength(head *ListNode, n int) *ListNode {
	length := getLength(head)
	dummy := &ListNode{Next: head}
	cur := dummy
	for i := 0; i < length-n; i++ {
		cur = cur.Next
	}

	cur.Next = cur.Next.Next
	return dummy.Next
}

// 时间复杂度：O(L)，其中 L是链表的长度。
// 空间复杂度：O(L)
func removeNthFromEndStack(head *ListNode, n int) *ListNode {
	nodes := []*ListNode{}
	dummy := &ListNode{0, head}
	for node := dummy; node != nil; node = node.Next {
		nodes = append(nodes, node)
	}
	prev := nodes[len(nodes)-1-n]
	prev.Next = prev.Next.Next
	return dummy.Next
}
