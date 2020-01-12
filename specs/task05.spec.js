const assert = require("assert");
const assesement = require("../src/task05");
const LinkedList = require("./Implementation/linkedList");
describe("task 01 test running",function(){
    it("should reverse the list ",function(){
        var llist = new LinkedList.SinglyLinkedList();
        var llist2 = new LinkedList.SinglyLinkedList();
        for(let i=0;i<=20;i++)
            llist.insertNode(i+Math.floor(Math.random()*1000));
        head = llist.head;
        while(head!=null){
            llist2.insertNode(head.data);
            head = head.next;
        }
        let newhead = assesement(llist.head);
        let myNewHead = reverseList(llist2.head);
        while(true){
            if(newhead !== null && myNewHead !== null){
                if(newhead.data !== myNewHead.data)
                    throw "Should reverse the list";
            }
            else if(newhead === null && myNewHead === null)
                break;
            else
                throw "Should reverse the list";
            newhead = newhead.next;
            myNewHead = myNewHead.next;
        }
    });
    it("should insert the data at the head",function(){
        let llist = new LinkedList.SinglyLinkedList();
        llist.insertNode(54);
        let newhead = assesement(llist.head);
        assert.equal(newhead.data,54);
    });
});
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