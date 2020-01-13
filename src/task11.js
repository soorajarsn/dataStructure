//The function should accept root node of the BST as its parameter and it should return the postOrder traversal of the tree as array ;
//The root can also be null, that is, an empty tree;



let traversal = [];
function postorder(root){
    if(root){
        postorder(root.left);
        postorder(root.right);
        traversal.push(root.data);
    }
}
function runPostorder(root){
    traversal = [];
    postorder(root);
    return traversal;
}
module.exports = runPostorder;