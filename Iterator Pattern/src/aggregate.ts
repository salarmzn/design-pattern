import { Iterator } from "./iterator";

export interface Aggregate<T> {
    createIterator(): Iterator<T>;
    pop(): T | null;
    push(content: T): void;
}