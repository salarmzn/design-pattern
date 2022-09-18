import { ConcreteSubject } from "./concrete-subject";
import { Observer } from "./observer";

export class ConcreteObserver2 implements Observer {
    
    constructor(private _subject: ConcreteSubject) {}
    
    public update(): void {
        console.log('Second Concrete Observer got notified!', this._subject.value);
    }

}