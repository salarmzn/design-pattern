export default class Memento {
    constructor(private readonly _content: string) {}

    public get content() : string {
        return this._content;
    }

}