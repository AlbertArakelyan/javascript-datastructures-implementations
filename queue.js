class Queue {
  constructor(...items) {
    this.items = [...items];
  }

  push(item) {
    this.items.unshift(item);
  }

  pop() {
    this.items.pop();
  }

  top() {
    const lastIndex = this.items.length - 1;
    return this.items[lastIndex];
  }

  bottom() {
    return this.items[0];
  }

  print() {
    let str = '';
    for (let item of this.items) {
      str += item;
    }

    return str;
  }
}

const queue = new Queue();
queue.push(2);
queue.push(3);
console.log(queue.top()); // 2
queue.pop();
console.log(queue.top()); // 3
queue.pop();
queue.push(4);
console.log(queue.top()); // 4
queue.pop();
queue.push(5);
console.log(queue.top()); // 5
queue.pop();
queue.push(6);
console.log(queue.top()); // 6
queue.pop();