import { LinkedList } from "./linkedlist.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.prepend("chicken");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.insertAt("Garbage",3);
list.removeAt(3);

console.log(list.toString());