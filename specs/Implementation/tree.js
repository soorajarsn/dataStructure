class TreeNode{
    constructor(data){
        this.left = null;
        this.data = data;
        this.right = null;
    }
}
class Tree{
    constructor(){
        this.root = null;
    }
    getRoot(){
        return this.root;
    }
    insert(data){
        const node = this.root;
        if(node == null)
            this.root = new TreeNode(data);
        else{
            const insertAtPosition = ( node ) => {
                if(data < node.data){
                    if(node.left == null)
                        node.left = new TreeNode(data);
                    else{
                        return insertAtPosition(node.left);
                    }
                }
                else{
                    if(node.right == null)
                        node.right = new TreeNode(data);
                    else{
                        return insertAtPosition(node.right);
                    }
                }
            }
            insertAtPosition(node);
        }
    }
    inorderTraversal(){
        const rootNode = this.root;
        let traversal = []; 
        const traverse = (rootNode) => {
            if(rootNode){
                traverse(rootNode.left);
                traversal.push(rootNode.data);
                traverse(rootNode.right);
         }
        }
        traverse(rootNode);
        return traversal;
    }
    preorderTraversal(){
        const rootNode = this.root;
        let traversal = [];
        const traverse = (rootNode) => {
            if(rootNode){
                traversal.push(rootNode.data);
                traverse(rootNode.left);
                traverse(rootNode.right);
            }
        } 
        traverse(rootNode);
        return traversal;
    }
    postorderTraversal(){
        const rootNode = this.root;
        let traversal = [];
        const traverse = (rootNode) => {
            if(rootNode)
            {
                traverse(rootNode.left);
                traverse(rootNode.right);
                traversal.push(rootNode.data);
            }
        }
        traverse(rootNode);
        return traversal;
    }

    levelOrderTraversal(){
        let queue = [];
        let traversal = [];
        if(this.root)
            queue.push(this.root);
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
    reverseLevelOrderTraversal(){
        let queue = [];
        let traversal = [];
        if(this.root)
            queue.push(this.root);
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
    levelOrderTraversalFromBottom(){
        let stack = this.reverseLevelOrderTraversal();
        let traversal = [];
        while(stack.length > 0)
            traversal.push(stack.pop());
        return traversal;
    }
    reverseLevelOrderTraversalFromBottom(){
        let stack = this.levelOrderTraversal();
        let traversal = [];
        while(stack.length > 0)
            traversal.push(stack.pop());
        return traversal;
    }
    delete(data){
        let rootNode = this.root;
        const findSuccessor = (node) => {
            while(node.left !== null){
                node = node.left;
            }
            return node;
        }
        
        const deleteHavingTwoChild = function(deleteNode,parent){
            let inorderSuccessor = findSuccessor(deleteNode.right);
            rootNode = remove(deleteNode,inorderSuccessor.data);
            if(parent !== null){
                if(deleteNode === parent.left)
                    parent.left = inorderSuccessor;
                else
                    parent.right = inorderSuccessor;
                inorderSuccessor.left = deleteNode.left;
                if(deleteNode.right !== inorderSuccessor){
                    inorderSuccessor.right = deleteNode.right;
                }//So that the right field of the node don't reference back to itself, resulting and infinity loop in
                //different operation 
                else{
                    inorderSuccessor.right = null;
                }
                return rootNode;
            }
            else{
                inorderSuccessor.left = deleteNode.left;
                if(deleteNode.right !== inorderSuccessor){
                    inorderSuccessor.right = deleteNode.right;
                }//So that the right field of the node don't reference back to itself, resulting and infinity loop in
                //different operation 
                else{
                    inorderSuccessor.right = null;
                }
                return inorderSuccessor;
            }
        }
        
        
        const deleteHavingOneChild = (deleteNode,parent)=>{
            let child = null;
                if(deleteNode.left)
                    child = deleteNode.left;
                else
                    child = deleteNode.right;
                if(!child)
                    child = null;
                
                if(parent !== null){
                    if(deleteNode === parent.left)
                        parent.left = child;
                    else
                        parent.right = child;
                    return rootNode;
                }
                else{
                    return child;
                }
        } 
        const remove = function (root,data){
            let parentNode = null,nodeToBeDeleted=null;
        
            const findParent = (data) => {
                while(root){                                             
                    if(root.data > data){
                        parentNode = root;
                        root = root.left;
                    }
                    else if(root.data < data){
                        parentNode = root;
                        root = root.right;
                    }
                    else{
                        nodeToBeDeleted = root;
                        break;
                    }
                }
            }

            findParent(data);

            if(nodeToBeDeleted === null){
                return rootNode;
            }
            else{
                if(nodeToBeDeleted.left && nodeToBeDeleted.right){
                    return deleteHavingTwoChild(nodeToBeDeleted,parentNode);
                }
                else{
                    return deleteHavingOneChild(nodeToBeDeleted,parentNode);
                }
            }
        }
        this.root = remove(this.root,data);
    }  
}
// let tree = new Tree();
// tree.insert(38);
// tree.insert(21);
// tree.insert(49);
// tree.insert(20);
// tree.insert(25);
// tree.insert(40);
// tree.insert(56);
// console.log(tree.inorderTraversal());
// console.log(tree.preorderTraversal());
// console.log(tree.postorderTraversal());
// console.log(tree.levelOrderTraversal());
// console.log(tree.reverseLevelOrderTraversal());
// console.log(tree.levelOrderTraversalFromBottom());
// console.log(tree.reverseLevelOrderTraversalFromBottom());
// //  console.log(tree.inorderTraversal());
module.exports = {
    Tree : Tree,
    TreeNode : TreeNode
};