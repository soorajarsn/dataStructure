//In this task the function accepts one parameter : an array of integers to be inserted in a binary search tree
//After inserting all the elements as nodes in BST , the function returns the root node of the tree;
//Array can contain duplicate elements, in that case, that element should be inserted according to the rule : parentData <= rightChildData;






const tree = require('../specs/Implementation/tree');

function insert(arr){
    let t = new tree.Tree();
    arr.forEach(element => {
        t.insert(element);        
    });
    return t.root;
}
module.exports = insert;