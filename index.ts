import { SwitchCases } from "./SwitchCases";

/**
 * Function for starting the switch-case block
 * @param identifier the original value/expression, which will be compared with all the potential case values
 * @returns A switch-case object, where multiple cases and the default case can be added
 */
export function startSwitch(identifier: mainId) {
    return new SwitchCases(identifier);
}