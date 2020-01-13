//The function should accept root node of the BST as its parameter and it should return the preorder traversal of the tree as array ;
//The root can also be null, that is, an empty tree;



let traversal = [];
function preorder(root){
    if(root){
        traversal.push(root.data);
        preorder(root.left);
        preorder(root.right);
    }
}
function runPreorder(root){
    traversal = [];
    preorder(root);
    return traversal;
}
module.exports = runPreorder;