export class Document {

    private _id: number;
    private _issueDate: Date;
    private _body: string;
    private _responsible: string;

    constructor(
        id: number,
        issueDate: Date,
        body: string,
        responsible: string
    ){
        this._id = id;
        this._issueDate = issueDate;
        this._body = body;
        this._responsible = responsible;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get issueDate(): Date {
        return this._issueDate;
    }

    public set issueDate(value: Date) {
        this._issueDate = value;
    }

    public get body(): string {
        return this._body;
    }

    public set body(value: string) {
        this._body = value;
    }

    public get responsible(): string {
        return this._responsible;
    }

    public set responsible(value: string) {
        this._responsible = value;
    }
}