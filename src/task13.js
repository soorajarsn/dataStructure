// The function accepts one parameter, that is, root node of the tree : the function should return the array of  level order traversal in reverse order;
                                                
                                                    
                                    //     --------80-------            <------- 1st step
                                    //     |               |            
                                    // ----22---       ----90---        <-------- 2nd step
                                    // |        |      |       |
                                    // 14      60      88      92        <---------3rd step


// The function should return [80,90,22,92,88,60,14] for the above Tree

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
module.exports = reverseLevelOrderTraversal;