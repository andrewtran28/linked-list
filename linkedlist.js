class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next
        }
        current.next = newNode;
        this.tail = newNode;
      }
      this.length++;
    }
  
    prepend(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
  
    size() {
      return this.length;
    }
  
    headNode() {
      return this.head;
    }
  
    tailNode() {
      return this.tail;
    }
  
    at(index) {
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
  
    pop() {
      if (this.head === this.tail) {
        const value = this.head.value;
        this.head = null;
        this.tail = null;
        this.length--;
        return value;
      } else if (this.length > 1) {
        const value = this.tail.value;
        const newTail = this.at(this.length - 2); //Recall "length" is the number of nodes and not index, therefore "length - 2" to get second last index
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return value;
      }
    }
  
    contains(value) {
      let currentNode = this.head;
      for (let i = 0; i < this.length; i++) {
        if (currentNode.value === value) {
          return true;
        }
        currentNode = currentNode.next;
      }

      return false;
    }
  
    find(value) {
      let currentNode = this.head;
      for (let i = 0; i < this.length; i++) {
        if (currentNode.value === value) {
          return i;
        }
        currentNode = currentNode.next;
      }
    }
  
    toString() {
      let currentNode = this.head;
      let string = "";
      while(currentNode) {
        string += `${currentNode.value} -> `;
        currentNode = currentNode.next;
      }
      string += "null";
      return string;
    }
  
    insertAt(value, index) {
      if (this.head === null) {
        this.append(value);
      } else if (index === 0) {
        this.prepend(value);
      } else if (this.head === this.tail && index >= 1) {
        this.append(value);
      } else {
        const newNode = new Node(value);
        newNode.next = this.at(index - 1).next;
        this.at(index - 1).next = newNode;
      }
      this.length++;
    }
  
    removeAt(index) {
      if (index < 0 || index >= this.length) {
        return null;
      } else if (index === 0) {
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
      } else {
        const previousNode = this.at(index - 1);
        const value = previousNode.next.value;
        previousNode.next = previousNode.next.next;
        this.length--;
        return value;
      }
    }
  }
  
  export { LinkedList };
  