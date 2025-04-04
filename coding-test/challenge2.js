//Stack Implementation
class Stack {
    constructor() {
      this.items = [];
    }
  
    push(value) {
      this.items.push(value);
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    size() {
      return this.items.length;
    }
  }
  
  // Example Usage:
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  console.log(stack.peek()); // Output: 2
  console.log(stack.pop());  // Output: 2
  console.log(stack.size()); // Output: 1
  