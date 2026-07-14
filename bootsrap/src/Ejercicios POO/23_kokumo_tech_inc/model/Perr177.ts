import { Perr177Data } from "./Perr177Data";

export class Perr177 {

    private _id: number;
    private _detections: Perr177Data[];

    constructor(
        id: number,
        detections: Perr177Data[],
    ) {
        this._id = id;
        this._detections = detections;
    }

    public get id(): number {
        return this._id;
    }

    public get detections(): Perr177Data[] {
        return this._detections;
    }
}