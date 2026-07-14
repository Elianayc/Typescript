export class Gr0n3Object {

    private _size: string;
    private _type: string;
    private _kind: string;

    constructor(
        size: string,
        type: string,
        kind: string
    ) {
        this._size = size;
        this._type = type;
        this._kind = kind;
    }


    public get size(): string {
        return this._size;
    }

    public get type(): string {
        return this._type;
    }

    public get kind(): string {
        return this._kind;
    }
}