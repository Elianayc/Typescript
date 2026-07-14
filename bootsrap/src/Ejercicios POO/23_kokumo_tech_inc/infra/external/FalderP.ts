import { Perr177 } from "../../model/Perr177";
import { Perr177Data } from "../../model/Perr177Data";
import { FPType } from "../../enum/FPType";
import { FPGender } from "../../enum/FPGender";

export class FalderP {
    
    public getData(): Perr177[] {

        return [
            new Perr177(1,[new Perr177Data(FPType.HUMAN,"rande",FPGender.FEMALE)]),
            new Perr177(2,[new Perr177Data(FPType.NO_HUMAN, "pichitito",FPGender.MALE)])
        ];

    }

}