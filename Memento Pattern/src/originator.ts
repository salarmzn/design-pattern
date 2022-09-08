import Memento from "./memento";

export default class Originator {
    private _content: string = '';

    public createState(): Memento {
        return new Memento(this._content);
    } 

    public restoreState(state: Memento | undefined): void {
        if (state) {
            this._content = state.content;
        }
    }

    public get content() : string {
        return this._content;
    }

    public set content(content : string) {
        this._content = content;
    }
    
    
}