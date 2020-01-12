// functions accepts two parameters, first head of the linked list 
//and the second: an integer which is the position from where node is to be deleted 

//consider head node to be at position 1 
// 1 <= position <= lenghtOfLinkedList
// lenghtOfLinkedList >= 1

function deleteNode(head , position){
    if(position === 1){
        head = head.next;
    }
    else{  
        let temp = head;
        for(let pos=2 ; pos<position ; pos++){
            temp = temp.next;
        }
        temp.next = temp.next.next;
    }
    return head;
}
module.exports = deleteNode;