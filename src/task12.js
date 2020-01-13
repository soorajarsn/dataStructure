//The function should accept root node of the BST as its parameter and it should return the level order traversal of the tree as array ;
//The root can also be null, that is, an empty tree;

                      
            // 1st-------->                    --------80-------            
            //                                 |               |            
            // 2nd-------->                ----22---       ----90---        
            //                             |        |      |       |
            // 3rd-------->                14      60      88      92        

//The function should return [80,22,90,14,60,88,92]


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
module.exports = levelOrderTraversal;