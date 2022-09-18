import { ConcreteSubject } from "./concrete-subject";
import { Observer } from "./observer";

export class ConcreteObserver1 implements Observer {

    constructor(private _subject: ConcreteSubject) {}

    public update(): void {
        console.log('First Concrete Observer got notified!', this._subject.value);
    }

}