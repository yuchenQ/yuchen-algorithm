// https://leetcode-cn.com/problems/implement-stack-using-queues/
class MyStack {
  private mainQueue: number[]
  private assQueue: number[]
    constructor() {
      this.mainQueue = [];
      this.assQueue = [];
    }

    push(x: number): void {
      this.assQueue.push(x);
      while (this.mainQueue.length) {
        this.assQueue.push(this.mainQueue.shift());
      }

      [this.mainQueue, this.assQueue] = [this.assQueue, []];
    }

    pop(): number {
      return this.mainQueue.shift();
    }

    top(): number {
      return this.mainQueue[0];
    }

    empty(): boolean {
      return this.mainQueue.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
