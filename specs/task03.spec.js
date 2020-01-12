const assert = require("assert");
const assesement = require("../src/task03");
const LinkedList = require("./Implementation/linkedList");
var llist = new LinkedList.SinglyLinkedList();
for(let i=0;i<=10;i++)
    llist.insertNode(i);
describe("task 01 test running",function(){
    it("should insert the data at given position",function(){
        let position = 0;
        let newhead = assesement(llist.head,position,55);
        assert.equal(newhead.data,55);
    });
    it("should insert the data at given position",function(){
        let position = 1;
        let newhead = assesement(llist.head,position,100);
        assert.equal(newhead.data,100);
    });
    it("should insert the data at given position",function(){
        let position = 6;
        let newhead = assesement(llist.head,position,15);
        for(var pos = 1;pos < position ; pos++)
            newhead = newhead.next;
        assert.equal(newhead.data,15);
    });
    it("should insert the data at given position",function(){
        let position = 12;
        let newhead = assesement(llist.head,position,32);
        for(var pos = 1;pos < position ; pos++){
            if(newhead.next === null)
                break;
            newhead = newhead.next;
        }
        assert.equal(newhead.data,32);
    });
    it("should insert the data at given position",function(){
        let position = 13;
        let newhead = assesement(llist.head,position,19);
        for(var pos = 1;pos < position ; pos++)
            newhead = newhead.next;
        assert.equal(newhead.data,19);
    });
    it("should insert the data at particular postion",function(){
        let position = 15;
        let newhead = assesement(llist.head,position,43);
        while(newhead.next != null)
            newhead = newhead.next;
        assert.equal(newhead.data,43);
    });
    it("should insert the data at particular postion",function(){
        let position = 20;
        let newhead = assesement(llist.head,position,143);
        while(newhead.next != null)
            newhead = newhead.next;
        assert.equal(newhead.data,143);
    });
    it("should insert the data at particular postion",function(){
        let position = 8;
        let newhead = assesement(null,position,43);
        while(newhead.next != null)
            newhead = newhead.next;
        assert.equal(newhead.data,43);
    });
});