class SinglyLinkedListNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
const SinglyLinkedList = class {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    insertNode(nodeData){
        const node = new SinglyLinkedListNode(nodeData);
        if(this.head == null)
            this.head = node;
        else{
            this.tail.next = node;
        }
        this.tail = node;
    }
}
module.exports = {
    SinglyLinkedListNode : SinglyLinkedListNode,
    SinglyLinkedList : SinglyLinkedList
};
