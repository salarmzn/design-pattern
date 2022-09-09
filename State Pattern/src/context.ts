import { State } from "./state";

export class Context {

    constructor (private _currentState: State) { }

    public request(): void {
        this._currentState.handle();
    }

    public get currentState() : State {
        return this._currentState;
    }
    
    public set currentState(tool : State) {
        this._currentState = tool;
    }
}