const assert = require("assert");
const assesement = require("../src/task04");
const LinkedList = require("./Implementation/linkedList");


describe("task 01 test running",function(){
    it("should delete the node at given position",function(){
        let llist = new LinkedList.SinglyLinkedList();
            for(let i=0;i<=10;i++)
                llist.insertNode(i);
        let position = 1;
        let newhead = assesement(llist.head,position);
        //assert.equal(newhead.data,55);
        assert.notEqual(newhead.data,0);
     });
    it("should return null",function(){
        let llist = new LinkedList.SinglyLinkedList();
        llist.insertNode(56);
        let position = 1;
        let newhead = assesement(llist.head,position);
        assert.equal(newhead,null);
        // assert.notEqual(newhead.data,56);
    });
    it("should delete the node at given position",function(){
        let llist = new LinkedList.SinglyLinkedList();
            for(let i=0;i<=10;i++)
                llist.insertNode(i);
        let position = 2;
        let newhead = assesement(llist.head,position);
        for(var pos = 1;pos < position ; pos++)
            newhead = newhead.next;
       assert.notEqual(newhead.data,1);
    });
    it("should delete the node at given position",function(){
        let llist = new LinkedList.SinglyLinkedList();
            for(let i=0;i<=10;i++)
                llist.insertNode(i);
        let position = 6;
        let newhead = assesement(llist.head,position,32);
        for(var pos = 1;pos < position ; pos++){
            newhead = newhead.next;
        }
       assert.notEqual(newhead.data,5);
    });
    it("should delete the node at given position",function(){
        let llist = new LinkedList.SinglyLinkedList();
            for(let i=1;i<=10;i++)
                llist.insertNode(i);
        let position = 10;
        let newhead = assesement(llist.head,position,19);
        for(var pos = 1;pos < position ; pos++)
            newhead = newhead.next;
       assert.equal(newhead,null);
    });
    it("should delete the node at particular postion",function(){
        let llist = new LinkedList.SinglyLinkedList();
            for(let i=0;i<=10;i++)
                llist.insertNode(i);
        let position = 6;
        let newhead = assesement(llist.head,position);
        let llist2 = new LinkedList.SinglyLinkedList();
            for(let i=0;i<=10;i++)
                llist2.insertNode(i);
        let myNewHead = deleteNode(llist2.head,position);
        while(true){
            if(newhead !== null && myNewHead !== null){
                if(newhead.data !== myNewHead.data)
                    throw "Wrong Answer";
            }
            else if(newhead === null && myNewHead ===null){
                break;
            }
            else{
                throw "Wrong Answer";
            }
            newhead  = newhead.next;
            myNewHead = myNewHead.next;
        }
      //  assert.equal("","");
    });
});
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