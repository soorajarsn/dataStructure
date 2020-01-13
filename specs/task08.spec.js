const assert = require("assert");
const assesement = require("../src/task08");
const tree = require("./Implementation/tree");
let  assesedInorderTraversal = [];


function createBST(arr){
    let mytree = new tree.Tree();
    arr.forEach(e => {
        mytree.insert(e);
    });
    let inorderTraversal = mytree.inorderTraversal();
    return inorderTraversal;
}
function checkResult(arr){
    let inorderTraversal = createBST(arr);
        let root = assesement(arr);
        assesedInorderTraversal =[];
        inorder(root);
        assert.deepEqual(inorderTraversal,assesedInorderTraversal);
}


describe("should return the root node of binary tree",function(){
    it("should insert the elements in BST",function(){
        let arr = [38,21,49];
        checkResult(arr);
    });
    it("should insert the elements in BST",function(){
        let arr = [1,2,3,4,5,6];
        checkResult(arr);
    });
    it("should insert the elements in  BST ",function(){
        let arr = [-1,-2,-3,-4,-5];
        checkResult(arr);
    });
    it("should insert the elements in  BST ",function(){
        let arr = [-1,2,3,-4,-5];
        checkResult(arr);
    });
    it("should insert the elements in  BST ",function(){
        let arr = [-1];
        checkResult(arr);
    });
    it("should allow duplicate elements in BST",function(){
        let arr = [43,93,53,54,2,5,10,22,42,32,52,13,6,63,21,2]
        checkResult(arr);
    });
    it("should allow duplicate elements in BST",function(){
        let arr = [32,32,43,43,24,24];
        checkResult(arr);
    })
});


function inorder(root){
    if(root != null){
        inorder(root.left);
        assesedInorderTraversal.push(root.data);
        inorder(root.right);
    }
}