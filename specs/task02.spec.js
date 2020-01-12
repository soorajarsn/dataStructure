const assert = require("assert");
const assesement = require("../src/task02");
const LinkedList = require("./Implementation/linkedList");
var llist = new LinkedList.SinglyLinkedList();
for(let i=0;i<=10;i++)
    llist.insertNode(i);
describe("task 01 test running",function(){
    it("should insert the data at the head",function(){
        let newhead = assesement(llist.head,5);
        assert.equal(newhead.data,5);
    });
    it("should insert the data at the head",function(){
        let newhead = assesement(null,10);
        assert.equal(newhead.data,10);
    });
    it("should insert the data at the head",function(){
        let newhead = assesement(llist.head,15);
        assert.equal(newhead.data,15);
    });
    it("should insert the data at the head",function(){
        let newhead = assesement(llist.head,32);
        assert.equal(newhead.data,32);
    });
    it("should insert the data at the head",function(){
        let newhead = assesement(llist.head,19);
        assert.equal(newhead.data,19);
    });
});