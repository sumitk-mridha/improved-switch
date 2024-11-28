export class StopperCase {
    case = (expr: mainId, cb: Function) => new StopperCase();

    default = (cb: Function) => {}
}