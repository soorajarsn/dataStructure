// The function accepts one parameter, that is, root node of the tree : the function should return the level order traversal in reverse order from bottom;
//The root of the tree can also be null, that is, empty tree              
                                                    
                                    //     --------80-------            <------- 3rd step
                                    //     |               |            
                                    // ----22---       ----90---        <-------- 2nd step
                                    // |        |      |       |
                                    // 14      60      88      92        <---------1st step


// The function should return [92,88,60,14,90,22,80] for the above Tree


function levelOrderTraversal(root){
    let queue = [];
    let traversal = [];
    if(root)
        queue.push(root);
    while(queue.length>0){
        let node = queue.shift();
        traversal.push(node.data);
        if(node.left)
            queue.push(node.left);
        if(node.right)
            queue.push(node.right);
    }
    return traversal;
}
function reverseLevelOrderTraversalFromBottom(root){
    let stack = levelOrderTraversal(root);
    let traversal = [];
    while(stack.length > 0)
        traversal.push(stack.pop());
    return traversal;
}
module.exports = reverseLevelOrderTraversalFromBottom;