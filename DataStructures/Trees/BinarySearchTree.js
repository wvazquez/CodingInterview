class BinarySearchTree{
    constructor(data){
      this.root = new Node(data);
      this.size = 1;
    }
    insert(data, node = this.root){
      //right subtree
      if(data > node.data){
        //no right node exists
        if(!node.right){
        //create node && append to right subtree
        node.right = new Node(data);
        this.size++;
        }else{
         this.insert(data, node.right);
        }
      }else{
        //left subtree
        if(!node.left){
        //no left node exists
        //create && append to left subtree
        node.left = new Node(data);
        this.size++;
        }else{
         this.insert(data, node.left);
        }
      }
    }
    contains(data, node = this.root){
      if(node.data === data) return true;
      if(data > node.data){
        //right subtree
        if(node.right){ 
          return this.contains(data, node.right);
        }else{
          return false;
        }
      }else{
        //left subtree
        if(node.left){ 
          return this.contains(data, node.left)
        }else{
          return false;
        }
      }
    }
    dfs_pre(){
      //center left right
    }
    dfs_in(){
      //left center right
    }
  
  }
  class Node{
    constructor(data){
      this.data = data;
      this.right = null;
      this.left = null;
    }
  }
  
  let BSTree = new BinarySearchTree(10);
  BSTree.insert(5)
  console.log(BSTree);