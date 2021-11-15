class Node {
  constructor(ele) {
    this.element = ele;
    this.next = null;
  }
}

function defaultEqualFn(a, b) {
  return a === b;
}

class LinkedList {
  constructor(equalsFn = defaultEqualFn) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  toString() {
    const list = [];
    let cur = this.head;

    while (cur !== null) {
      list.push(cur.element);
      cur = cur.next;
    }

    return list.join(",");
  }

  indexOf(element) {
    let cur = this.head;
    for (let i = 0; cur !== null && i < this.count; i++) {
      if (this.equalsFn(cur.element, element)) {
        return i;
      }
      cur = cur.next;
    }

    return -1;
  }

  getNodeAt(index) {
    if (!Number.isInteger(index) || index < 0 || index >= this.count) {
      return undefined;
    }

    let cur = this.head;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }

    return cur;
  }

  append(element) {
    const node = new Node(element);

    if (!this.head) {
      this.head = node;
    } else {
      const tail = this.getNodeAt(this.count - 1);
      tail.next = node;
    }

    this.count++;
    return true;
  }

  prepend(element) {
    const node = new Node(element);

    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
      this.count++;
    }

    return true;
  }

  insert(element, index) {
    if (!Number.isInteger(index) || index < 0 || index > this.count) {
      return false;
    }

    if (index === 0) {
      return this.prepend(element);
    } else if (index === this.count) {
      return this.append(element);
    } else {
      const node = new Node(element);

      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      [prev.next, node.next] = [node, prev.next];
      this.count++;
      return true;
    }
  }

  removeAt(index) {
    if (!Number.isInteger(index) || index < 0 || index >= this.count) {
      return null;
    }

    let cur = this.head;
    if (index === 0) {
      this.head = cur.next;
      return this.head;
    } else {
      const prev = this.getNodeAt(index - 1);
      cur = prev.next;
      prev.next = cur.next;
    }

    this.count--;
    return cur;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
}

const linkedList = new LinkedList();
console.log(linkedList.size()); // 0
console.log(linkedList.isEmpty()); // true
linkedList.append(1);
linkedList.append(3);
linkedList.append(2);
linkedList.append(5);
console.log(linkedList.size()); // 4
let node = linkedList.getNodeAt(2);
console.log(node.element); // 2
console.log(linkedList.indexOf(5)); // 3
console.log(linkedList.indexOf(8)); // -1
console.log(linkedList.insert(9, 1)); // true
console.log(linkedList.toString()); // 1,9,3,2,5
console.log(linkedList.remove(2)); // true
console.log(linkedList.toString()); // 1,9,3,5
console.log(linkedList.removeAt(2)); // 3
console.log(linkedList.toString()); // 1,9,5
