import { StopperCase } from "./StopperCase";

export class SwitchCases {
    shouldBreak = false;
    conditionSatisfiedAlready = false;
    identifier: mainId = undefined;
    constructor(identifier: mainId, shouldBreak=false, conditionSatisfiedAlready=false) {
        this.identifier = identifier;
        this.shouldBreak = shouldBreak;
        this.conditionSatisfiedAlready = conditionSatisfiedAlready;
    }

    /**
     * A function through which a particular case, and its callback function(in case where either the particular case is satisfied, or the flow of control comes to this case block through 'fall-through' behavior) can be passed
     * @param expr the value/expression to be checked against the original value
     * @param cb the callback function
     * @returns void. Executes the callback, if the given case is satisfied, or the flow of control comes to this case block through 'fall-through' behavior
     */
    case = (expr: mainId, cb: Function): SwitchCases | StopperCase => {
        if(!this.shouldBreak) {
            if(this.identifier == expr) this.conditionSatisfiedAlready = true;
            if(this.conditionSatisfiedAlready)
                this.shouldBreak = Boolean(cb());
            return new SwitchCases(this.identifier, this.shouldBreak, this.conditionSatisfiedAlready)
        }
        else {
            return new StopperCase()
        }
    }

    /**
     * Function for when default block of the switch statement is to be executed
     * @param cb callback function
     */
    default = (cb: Function) => {
        if(!this.shouldBreak)
            cb();
    }
}