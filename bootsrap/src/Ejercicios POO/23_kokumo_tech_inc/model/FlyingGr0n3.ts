import { Animal } from "./Animal";

export class FlyingGr0n3 {

    private _id: number;
    private _type: string;
    private _kind: string | Animal;

    constructor(
        id: number,
        type: string,
        kind: string | Animal
    ){
        this._id = id;
        this._type = type;
        this._kind = kind;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public set type(value: string) {
        this._type = value;
    }

    public get type(): string {
        return this._type;
    }

    public get kind(): string | Animal {
        return this._kind;
    }

    public set kind(value: string | Animal ){
        this._kind = value;
    }
}