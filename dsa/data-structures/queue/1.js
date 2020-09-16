class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    isEmpty() {
        return !this.front;
    }

    /**
     * @description Add element to queue
     * @param {Number} value 
     * @return {undefined}
     */
    enqueue(value) {
        // create a new  node with value
        const node = new Node(value);

        // if queue is empty
        if (this.isEmpty()) {
            // point front and back to new node
            this.front = this.back = node;
        } else {
            //push node to back of queue
            // by pointing the last node to the newly created node 
            this.back.next = node;

            // move back pointer to new node
            this.back = node;
        }
        this.print();
    }

    print() {
        // if the queue is empty
        if (this.isEmpty()) {
            console.log("EMPTY QUEUE");
        }
        // else it's not empty
        else {
            // temp arr
            let tmpArr = [];

            // temp variable to front of queue
            let tmp = this.front;

            // iterate through the queue
            while (tmp) {
                // add value into arr
                tmpArr.push(tmp.value)

                // move to the next element
                tmp = tmp.next;
            }

            // print the value
            console.log(tmpArr.join(','));
        }
    }

    dequeue() {
        // pointer to front of the queue

        // if queue is not empty
        //
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
