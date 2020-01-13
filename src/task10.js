//The function should accept root node of the BST as its parameter and it should return the inorder traversal of the tree as array ;
//The root can also be null, that is, an empty tree;



let traversal = [];
function inorder(root){
    if(root){
        inorder(root.left);
        traversal.push(root.data);
        inorder(root.right);
    }
}
function runInorder(root){
    traversal = [];
    inorder(root);
    return traversal;
}
module.exports = runInorder;