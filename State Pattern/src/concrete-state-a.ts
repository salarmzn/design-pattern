import { State } from "./state";


export class ConcreteStateA implements State {
    
    public handle(): void {
        console.log('Concrete State A has been actived!');
    }
    
}