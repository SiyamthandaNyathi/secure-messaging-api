//Linked List Manipulation Siyamthanda Nyathi
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insertAtHead(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    insertAtTail(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    delete(value) {
      if (!this.head) return;
  
      if (this.head.value === value) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      while (current.next && current.next.value !== value) {
        current = current.next;
      }
  
      if (current.next) {
        current.next = current.next.next;
      }
    }
  
    toArray() {
      const values = [];
      let current = this.head;
      while (current) {
        values.push(current.value);
        current = current.next;
      }
      return values;
    }
  }
  
  //Usage:
  const ll = new LinkedList();
  ll.insertAtHead(10);
  ll.insertAtHead(5);
  ll.insertAtTail(15);
  ll.delete(10);
  console.log(ll.toArray()); //Output: [5, 15]