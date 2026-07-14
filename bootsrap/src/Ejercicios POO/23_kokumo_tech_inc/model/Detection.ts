export class Detection {

    private _deviceId: number;
    private _type: string;
    private _size: string;
    private _observation: string;

    constructor(
        deviceId: number,
        type: string,
        size: string,
        observation: string
    ) {
        this._deviceId = deviceId;
        this._type = type;
        this._size = size;
        this._observation = observation;
    }


    public get deviceId(): number {
        return this._deviceId;
    }

    public get type(): string {
        return this._type;
    }

    public get size(): string {
        return this._size;
    }

    public get observation(): string {
        return this._observation;
    }
}