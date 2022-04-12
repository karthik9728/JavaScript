class Queue<T>{
    private data:T[]=[];

    add(value:T){
        this.data.push(value);
    }
    remove(){
        this.data.shift();
    }
    print(){
        console.log(this.data);
    }
}

const nextQueue = new Queue<string>();
nextQueue.add('Max');
nextQueue.add('Jhon');

const numberQueue = new Queue<number>();
numberQueue.add(5);
numberQueue.add(10);

