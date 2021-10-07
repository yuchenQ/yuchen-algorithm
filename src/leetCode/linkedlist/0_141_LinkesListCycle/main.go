package linkedlistcycle

// https://leetcode-cn.com/problems/linked-list-cycle/

type ListNode struct {
	Val  int
	Next *ListNode
}

func hasCycleHash(head *ListNode) bool {
	hash := make(map[*ListNode]int)
	dummy := &ListNode{Next: head}

	head = dummy

	for head.Next != nil {
		if _, exist := hash[head.Next]; exist {
			return true
		}

		hash[head.Next] = 1
		head = head.Next
	}

	return false
}

func hasCycleHashDoublePointers(head *ListNode) bool {
	if head == nil || head.Next == nil {
		return false
	}

	slow := head
	fast := head.Next

	for fast != nil && fast.Next != nil && slow != nil {
		if fast == slow {
			return true
		}

		slow = slow.Next
		fast = fast.Next.Next
	}
	return false
}
