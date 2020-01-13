const assert = require("assert");
const assesement = require("../src/task12");
const tree = require("./Implementation/tree");



function createBST(arr){
    let mytree = new tree.Tree();
    arr.forEach(e => {
        mytree.insert(e);
    });
    return {
        root: mytree.root,
     levelOrderTraversal: mytree.levelOrderTraversal()
    };
}
function checkResult(arr){
        let bst = createBST(arr);
        let levelOrderTraversal = assesement(bst.root);
       // console.log(levelOrderTraversal);
        assert.deepEqual(bst.levelOrderTraversal,levelOrderTraversal);
}


describe("should return the root node of binary tree",function(){
    it("should return levelOrder traversal",function(){
        let arr = [38,21,49];
        checkResult(arr);
    });
    it("should return levelOrder traversal",function(){
        let arr = [1,2,3,4,5,6];
        checkResult(arr);
    });
    it("should return levelOrder traversal ",function(){
        let arr = [-1,-2,-3,-4,-5];
        checkResult(arr);
    });
    it("should return levelOrder traversal ",function(){
        let arr = [38,28,48,20,30,45,50,46,47,21,22];
        checkResult(arr);
    });
    it("should return levelOrder traversal ",function(){
        let arr = [-1];
        checkResult(arr);
    });
    it("should return levelOrder traversal",function(){
        let arr = [43,93,53,54,2,5,10,22,42,32,52,13,6,63,21,2]
        checkResult(arr);
    });
    it("should return levelOrder traversal",function(){
        let arr = [32,32,43,43,24,24];
        checkResult(arr);
    });
    it("should return levelOrder traversal",function(){
        let arr = [];
        checkResult(arr);
    });
});
