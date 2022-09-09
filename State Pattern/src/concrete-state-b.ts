import { State } from "./state";


export class ConcreteStateB implements State {
    
    public handle(): void {
        console.log('Concrete State B has been actived!');
    }
    
}