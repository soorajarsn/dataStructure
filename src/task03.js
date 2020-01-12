// The function should insert the data in the list at specific position
// The function should accept three parameters :first head node of the linked list and  
//two integers ; first : position and the second : data to be inserted at that position 

// if position == 0 ; insert as head node 
// if position > lenght of list ; insert at the tail
//consider the head node at position first 
// position >= 0
// If head is null insert the data as head node;

// For example if the list is 1 3 5 2 6 23 4
// and position given is 4 and data = 21
// then the resulting list will be 1 3 5 21 2 6 23 4 


// for reference .....
// the class to create the node .........
class SinglyLinkedListNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function insertAtSpecificPos(head,position,data){
    let node = new SinglyLinkedListNode(data);
    if(position === 0 || position === 1){
        node.next = head;
        head = node;
    }
    else if(head == null){
        node.next = null;
        head = node;
    }
    else{
        let pos=2;
        let temp = head;
        while(temp.next !== null && pos < position){
            temp = temp.next;
            pos++;
        }
        node.next = temp.next;
        temp.next = node;
    }
    return head;
}
module.exports = insertAtSpecificPos;