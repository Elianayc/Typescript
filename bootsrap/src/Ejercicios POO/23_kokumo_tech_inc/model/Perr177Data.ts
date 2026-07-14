import { FPType } from "../enum/FPType";
import { FPGender } from "../enum/FPGender";

export class Perr177Data {

    private _type: FPType;
    private _size: string;
    private _gender: FPGender;

    constructor(
        type: FPType,
        size: string,
        gender: FPGender
    ) {
        this._type = type;
        this._size = size;
        this._gender = gender;
    }

    public get type(): FPType {
        return this._type;
    }

    public get size(): string {
        return this._size;
    }

    public get gender(): FPGender {
        return this._gender;
    }
}