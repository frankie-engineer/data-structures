const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

const getTimeComplexities = () => {
    let minList = 1;
    let maxList = 1000;
    let runtimes = [[], [], [], []]; // 4 methods will be tested

    for (let listLength = minList; listLength <= maxList; listLength++) {
        let ll = new LinkedList();
        let dd = new DoublyLinkedList();
        let functions = [
            ll.addToHead.bind(ll),
            dd.addToHead.bind(dd),
            ll.addToTail.bind(ll),
            dd.addToTail.bind(dd)
        ];

        for (let i = 0; i < listLength; i++) {
            functions.forEach((cb, i) => {
                let start = Date.now();
                cb();
                let end = Date.now();
                let runtime = end - start;
                runtimes[i].push(runtime);
            });
        }
    }

    return runtimes;
}

let runTimes = getTimeComplexities();
console.log(runTimes);
