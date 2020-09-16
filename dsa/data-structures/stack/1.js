class Stack {

    constructor() {
        this.items = [];
        this.count = 0;
    }

    /**
     * @description Add element to top of stack
     * @return Position
     */
    push(element) {
        this.items[this.count] = element;
        console.log(`${element} Added to ${this.count}`);
        this.count += 1;
        return this.count - 1;
    }

    /**
     * @description remove top element in stack 
     * @returns top element in stack or undefined if stack is empty
     */
    pop() {
        if (this.count == 0) return undefined;
        let deletedElement = this.items[this.count - 1];
        delete this.items[this.count - 1];
        this.count -= 1;
        console.log(`${deletedElement} removed`);
        return deletedElement;
    }

    /**
     * @description Return top element;
     * @returns {Number}
     */
    peek() {
        let topElement = this.items[this.count - 1];
        console.log(`Top element is ${topElement}`);
        return topElement;
    }

    /**
     * @description check if stack is empty
     * @returns {Boolean}
     */
    isEmpty() {
        console.log(this.count === 0 ? `Stack is empty` : `Stack is NOT empty`);
        return this.count === 0;
    }

    size() {
        console.log(`${this.count} element in stack`);
    }
    /**
     * @description 
     */
    print() {
        let str = '';
        for (let index = 0; index < this.count; index++) {
            str += `${this.items[index]} `;
        }
        console.log(`Stack `, str ? str : 'is empty');
        return str;
    }

    clear() {
        this.items = [];
        this.count = 0;
        console.log(`Stack is cleared`);
        return this.items;
    }
}

const stack = new Stack();


// push operation
stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);
stack.print();

stack.isEmpty();

// peek operation
stack.peek();

// pop operation
stack.pop();
stack.pop();

stack.size();

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

stack.print();
stack.isEmpty();

