// https://leetcode-cn.com/problems/implement-queue-using-stacks/
class MyQueue {
  private body: number[]
    constructor() {
      this.body = [];
    }

    push(x: number): void {
      this.body.push(x);
    }

    pop(): number {
      return this.body.shift();
    }

    peek(): number {
      return this.body[0];
    }

    empty(): boolean {
      return this.body.length ? false : true;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
