import { Aggregate } from "./aggregate";
import { ConcreteIterator } from "./concrete-iterator";

export class ConcreteAggregate<T> implements Aggregate<T> {
    private _contents: T[] = [];
    
    public get contents(): T[] {
        return this._contents;
    }
    
    public push(content: T): void {
        this._contents.push(content);
    }
    
    public pop(): T | null{
        return this._contents.pop() ?? null;
    }
    
    
    public createIterator(): ConcreteIterator<T>  {
        return new ConcreteIterator<T>(this);
    } 
    
    
}