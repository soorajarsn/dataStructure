//The function should accept root node of the BST as its parameter and it should return the level order traversal of the tree from bottom as array ;
//The root can also be null, that is, an empty tree;

                      
            // 3rd-------->                    --------80-------            
            //                                 |               |            
            // 2nd-------->                ----22---       ----90---        
            //                             |        |      |       |
            // 1st-------->                14      60      88      92        

//The function should return [14,60,88,92,22,90,80]



function reverseLevelOrderTraversal(root){
    let queue = [];
    let traversal = [];
    if(root)
        queue.push(root);
    while(queue.length>0){
        let node = queue.shift();
        traversal.push(node.data);
        if(node.right)
            queue.push(node.right);
        if(node.left)
            queue.push(node.left);
    }
    return traversal;
}   
function levelOrderTraversalFromBottom(root){
    let stack = reverseLevelOrderTraversal(root);
    let traversal = [];
    while(stack.length > 0)
        traversal.push(stack.pop());
    return traversal;
}
module.exports = levelOrderTraversalFromBottom;