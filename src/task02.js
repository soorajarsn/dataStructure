
function insertHead(head,data){
    let node = new SinglyLinkedListNode(data);
    if(head === null){
        head = node
        return head;
    }
    node.next = head;
    head = node;
    
   return head;
}

class SinglyLinkedListNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}  

module.exports = insertHead;