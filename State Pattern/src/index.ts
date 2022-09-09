import { ConcreteStateA } from "./concrete-state-a";
import { ConcreteStateB } from "./concrete-state-b";
import { Context } from "./context";


let context = new Context(new ConcreteStateA());

context.request();

context.currentState = new ConcreteStateB();

context.request();
