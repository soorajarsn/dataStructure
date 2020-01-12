// the function accepts two parameters : first head of the linked list 
// and second an integer which denotes an specific position from the tail of the list;
// counting backwords from the tail of the list , get the value of the node at the given 
// postion . A position of 0 corresponds to the tail and 1 corresponds to the node before
// tail 
// 0 <= pos <= lengthOflist-1;
// return the data at the specified node...........


function getNode(head,position){
    let newhead = reverse(head);
    for(let pos=0;pos<position;pos++){
        newhead = newhead.next;
    }
    return newhead.data;
}
function reverse(head){
    let newhead;
    if(head.next == null)
        return head;
    newhead = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return newhead;
}
module.exports = getNode;