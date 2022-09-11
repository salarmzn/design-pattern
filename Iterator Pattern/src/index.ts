import { ConcreteAggregate } from "./concrete-aggregate";


let content = new ConcreteAggregate<string>;

content.push('a');
content.push('b');
content.push('c');

let iterator = content.createIterator();

while (iterator.hasNext()) {
    let content: string = iterator.current();
    console.log(content);
    iterator.next();
}