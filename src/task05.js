//Reverse the linked list 
//The function accepts one parameter, that is, the head node of the list
// lenghtOfLinkedList >= 1; 
//return the head node of the reversed list

function reverseList(head){
    let newhead;
    if(head.next === null){
        return head;
    }
    newhead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newhead;
}
module.exports = reverseList;