import { ConcreteObserver1 } from "./concrete-observer-1";
import { ConcreteObserver2 } from "./concrete-observer-2";
import { ConcreteSubject } from "./concrete-subject";


let subject = new ConcreteSubject();

let Observer1 = new ConcreteObserver1(subject);
let Observer2 = new ConcreteObserver1(subject);
let Observer3 = new ConcreteObserver2(subject);

subject.attach(Observer1);
subject.attach(Observer2);
subject.attach(Observer3);

subject.value = 1;