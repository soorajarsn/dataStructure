//Insert the node as the head of the linked list 
//the function has two parameters, first : the head node of the list and 
// second : an integer that corresponds to the data to be inserted


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