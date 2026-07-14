import { Gr0n3Object } from "../../model/Gr0n3Object";

export class FlyingGr0n3 {

    public static getData(id: number): Gr0n3Object[] {

        if (id < 1 || id > 10) {
            throw new Error("El dispositivo no existe");
        }

        return [
            new Gr0n3Object("big", "animal", "horse"),
            new Gr0n3Object("small", "animal", "cat")
        ];
    }
}