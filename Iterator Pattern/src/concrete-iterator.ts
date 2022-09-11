import { ConcreteAggregate } from "./concrete-aggregate";
import { Iterator } from "./iterator";

export class ConcreteIterator<T> implements Iterator<T> {
    index: number;
    
    constructor(private _aggregateObj: ConcreteAggregate<T>) {
        this.index = 0;
    }
    
    public hasNext(): boolean {
        return (this.index < this._aggregateObj.contents.length);
    }
    
    public current(): T {
        return this._aggregateObj.contents[this.index];
    }
    
    public next(): void {
        this.index++;
    }
}