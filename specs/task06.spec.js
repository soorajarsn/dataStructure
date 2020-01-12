const assert = require("assert");
const assesement = require("../src/task06");
const LinkedList = require("./Implementation/linkedList");
describe("task 01 test running",function(){
    it("should return the data.",function(){
        var llist = new LinkedList.SinglyLinkedList();
        for(let i=0;i<=20;i++)
            llist.insertNode(i);
        var data = assesement(llist.head,1);
        assert.equal(data,19);
    });
    it("should return the data.",function(){
        let llist = new LinkedList.SinglyLinkedList();
        llist.insertNode(54);
        let data = assesement(llist.head,0);
        assert.equal(data,54);
    });
    it("should return the data.",function(){
        var llist = new LinkedList.SinglyLinkedList();
        for(let i=0;i<=20;i++)
            llist.insertNode(i);
        var data = assesement(llist.head,15);
        assert.equal(data,5);
    });
    it("should return the data. ",function(){
        var llist = new LinkedList.SinglyLinkedList();
        for(let i=0;i<=20;i++)
            llist.insertNode(i);
        var data = assesement(llist.head,20);
        assert.equal(data,0);
    });
});
