//A function which accept the head node of a singly linked list as its 
//parameter and detects the presence of cycle in the linked list 
//If there is cycle then returns true and false otherwise
//The head node may be null in that case it should return false






function detect(head){
    if(head === null)
        return false;
    let slow = head;
    let fast = head;
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast)
            return true; 
    }
    return false;
}
module.exports = detect;