import { Observer } from "./observer";

// Observable
export abstract class Subject {
    private _observers: Observer[] = [];
    constructor() {}
    
    attach(observer: Observer): void {
        this._observers.push(observer)
    }

    detach(observer: Observer): void {
        const index = this._observers.indexOf(observer, 0);
        if (index > -1) {
            this._observers.splice(index, 1);
        }
    }

    notify() {
        this._observers.forEach(observer => {
            observer.update();
        });
    }
}