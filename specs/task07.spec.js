const assert = require("assert");
const assesement = require("../src/task11");
const LinkedList = require("./Implementation/linkedList");

describe("task 11 test running",function(){
    it("should return true",function(){
        let llist = new LinkedList.SinglyLinkedList();
        for(let i = 0; i < 10;i++){
             llist.insertNode(i);
        }
        let temp = llist.head,save;
        while(temp.next != null){
            if(temp.data == 7)
                 save = temp;
            temp = temp.next;
        }
        temp.next = save;
        assert.equal(assesement(llist.head),true);
    });
    it("should return false",function(){
        assert.equal(assesement(new LinkedList.SinglyLinkedList().head),false);
    });
    it("should retrun false",function(){
        let llist = new LinkedList.SinglyLinkedList();
        for(let i = 0; i < 10;i++){
              llist.insertNode(i);
        }
        assert.equal(assesement(llist.head),false);
    });
    it("should return false ",function(){
        let newllist = new LinkedList.SinglyLinkedList();
        newllist.insertNode(2);
        newllist.insertNode(3);
        assert.equal(assesement(newllist.head),false);
    });
    it("should return true",function(){
        let llist = new LinkedList.SinglyLinkedList();
        for(let i = 0; i < 10;i++){
              llist.insertNode(i);
        }
        llist.tail.next = llist.head;
        assert.equal(assesement(llist.head),true);
    });
});