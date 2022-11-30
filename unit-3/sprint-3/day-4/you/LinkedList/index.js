// console.log('Subham');
class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}
class Linkedlist{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    add(element){
        let node = new Node(element);
        if(!this.head){
            this.head = node;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    insertAt(element,index){
        if(index>this.size || index<0 && this.size){
            return false;
        }
        let node = new Node(element);
        let current = this.head;
        let prev = null;
        let i = 0;
        if(index==0){
            node.next = current;
            this.head = node;
        }else{
            while(i<index){
                prev = current;
                current = current.next;
                i++;
            }
            prev.next = node;
            prev = prev.next;
            prev.next = current;
            this.size++;
        }

    }


    isEmpty(){
        return this.size == 0 ? true : false;
    }
    sizeofLL(){
        return this.size;
    }
    printlist(){
        let current = this.head;
        let index = 0;
        while(current){
            console.log('element:',current.element,'index:',index++);
            current = current.next;

        }
    }
    removeElement(element){
        let current = this.head;
        let prev = null;
        while(current){
            if(current.element = element){
                if(prev==null){
                    this.head = current.next;

                }else{
                    prev.next = current.next;
                }
                this.size--;
                return true;
            }
            prev = current;
            current = current.next;
        }

    }
}
let list = new Linkedlist();
// console.log(list.isEmpty());
list.add(1);
list.add(2);
list.add(3);
list.insertAt(5,0)
list.printlist()
// console.log(list.sizeofLL());

// function Elem(element,score){
//     this.element = element;
//     this.score = score;
// }
// let elem = new Elem('subham','100');
// let newelem = new Node(elem);
// console.log(newelem);