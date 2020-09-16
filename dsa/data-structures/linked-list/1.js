class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * @description Insert first node
     */
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    /**
     * @description Insert last node
     */
    insertLast(data) {
        let node = new Node(data);
        let current;

        // If empty , make head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    /**
     * @description Insert at index
     */
    insertAt(data, index) {
        if (index > 0 && index > this.size) {
            return;
        }

        // If first index
        if (index == 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous;

        current = this.head;
        let count = 0;
        while (count < index) {
            previous = current; // Node before index
            count++;
            current = current.next // Node after index
        }
        node.next = current;
        previous.next = node;
    }
    /**
     * @description Get at index
     */
    getAt(index) {
        let current = this.head;
        let count = 0
        while (current) {
            if (count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }

        return null;
    }

    /**
     * @description Remove at index
     */
    removeAt(index) {
        if (index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        // Remove first 
        if (index == 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }

        this.size--;
    }

    /**
     * @description Clear list
     */
    clear() {
        this.head = null;
        this.size = 0;
    }

    /**
    * @description Print list
    */
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

}

const linkedList = new LinkedList();

linkedList.insertFirst(100);

linkedList.insertFirst(400);

linkedList.insertLast(500);


linkedList.clear();

linkedList.insertFirst(300);

linkedList.insertAt(900, 1);

// linkedList.getAt(1);

// linkedList.removeAt(1);

linkedList.print();