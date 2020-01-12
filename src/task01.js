// The function accepts the head node of a linkedlist as its first parameter 
// and an integer as its second integer and inserts it at tail of the linked list

//FOR REFERENCE ................
//the class to create node is below.....
// class SinglyLinkedListNode {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }




function insertTail(head,data){
    if(head === null){
        head = new SinglyLinkedListNode(data);
        return head;
    }
    let temp = head;
    while(temp.next != null){
        temp = temp.next;
    }
    temp.next = new SinglyLinkedListNode(data);
    temp = head;
    while(temp!=null){
        console.log(temp.data);
        temp = temp.next;
    }
   return head;
}

class SinglyLinkedListNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}  



module.exports = insertTail;