import Memento from "./memento";

export default class Caretaker {
    private _states: Memento[] = [];

    /**
    * Push the last state
    * @param {Memento} state - Enter ther current state as input
    * @return {void}
    */     
    public push(state: Memento): void {
        this._states.push(state);
    }

    /**
    * Remove the last elemt of history and return it.
    * If the the history is empty it will return `undefined` 
    * @returns {Memento}
    */
    public pop(): Memento | undefined{
        return this._states.pop();
    }
}